import { AST } from "../ast/ast";
import {
    ASTNode,
    Block,
    BlockIdentity,
    BlockIO,
    BlockLinks,
    Identifier,
    IdentityStatement,
    IOStatement,
    LinkStatement,
    Root,
    Value,
} from "../ast/types";
import {
    Block as GraphBlock,
    BlockIO as GraphBlockIO,
    BlockLinks as GraphBlockLinks,
} from "../../app/graph/types";
import { Visitor } from "./visitor";

export class PrettyPrinter extends Visitor {
    code: string = "";

    constructor(tree: AST) {
        super(tree);
    }

    public pretty_print(): string {
        this.visit_tree();
        console.log(this.tree);
        return this.code;
    }

    public visit_root(node: Root) {
        this.visit_children(node);
    }

    public visit_block(node: Block) {
        this.code += "====\n";
        if (this.current_block != undefined)
            this.blocks.push(this.current_block);
        this.current_block = new GraphBlock();
        super.visit_block(node);
        this.visit_children(node);
        this.code += "====\n";
    }

    public visit_block_identity(node: BlockIdentity) {
        super.visit_block_identity(node);
        this.visit_children(node);
    }

    public visit_block_io(node: BlockIO) {
        this.code += "  ----\n";
        super.visit_block_io(node);
        this.visit_children(node);
    }

    public visit_block_links(node: BlockLinks) {
        super.visit_block_links(node);
        this.visit_children(node);
    }

    public visit_identity_statement(node: IdentityStatement) {
        this.visit_children(node);
        this.is_current_block_valid();
        switch (this.current_identifier) {
            case "id":
                this.current_block!.id = parseInt(this.current_value);
                break;
            case "type":
                this.current_block!.type = this.current_value.slice(1, -1);
                if (this.current_block!.type == "utils/prgm_init") {
                    if (this.has_start)
                        throw Error("Double init blocks! Aborting");
                    this.has_start = true;
                }
                break;
            case "title":
                this.current_block!.title = this.current_value.slice(1, -1);
                break;
            case "pos":
                const data = this.current_value.split(",");
                this.current_block!.pos = [
                    parseInt(data[0]),
                    parseInt(data[1]),
                ];
                this.current_value = `(${this.current_block!.pos})`;
                break;
            case "value":
                this.current_block!.value = this.current_value;
                break;
            default:
                throw Error(
                    `Couldn't understand identifier: ${this.current_identifier}, with value: ${this.current_value}`
                );
        }
        this.code += `  ${this.current_identifier}: ${this.current_value}\n`;
        super.visit_identity_statement(node);
    }

    public visit_io_statement(node: IOStatement) {
        this.nb_branches += 4;
        // in/out
        node.get_children()[0].accept(this);
        const in_out = this.current_value;
        // name
        node.get_children()[1].accept(this);
        const name = this.current_value;
        // io type
        node.get_children()[2].accept(this);
        const io_type = this.current_value;
        // value
        node.get_children()[3].accept(this);
        const value = this.current_value;

        this.is_current_block_valid();
        this.code += `  ${in_out}: "${name}", ${io_type}, ${value}\n`;
        const block_io = new GraphBlockIO(in_out, name, io_type, value);
        if (in_out == "in") this.current_block!.inputs.push(block_io);
        else this.current_block!.outputs.push(block_io);
    }

    public visit_link_statement(node: LinkStatement) {
        this.nb_branches += 3;
        // out_id
        node.get_children()[0].accept(this);
        const out_id = parseInt(this.current_value);
        // in_id
        node.get_children()[1].accept(this);
        const in_id = parseInt(this.current_value);
        // block id
        node.get_children()[2].accept(this);
        const block_id = parseInt(this.current_value);

        this.is_current_block_valid();
        if (this.current_block!.links.length == 0) this.code += "  ----\n";
        this.code += `  conn: ${in_id} ---> ${block_id}, ${out_id}\n`;
        this.current_block!.links.push(
            new GraphBlockLinks(out_id, in_id, block_id)
        );
    }
}
