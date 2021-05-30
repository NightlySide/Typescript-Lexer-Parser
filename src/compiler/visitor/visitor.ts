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
import { Block as GraphBlock } from "../../app/graph/types";

function printIfDebug(debug: boolean, message: String) {
    if (debug) {
        console.log(message);
    }
}

export class Visitor {
    tree: AST;
    nb_branches = 0;
    blocks: GraphBlock[] = [];
    has_start: boolean = false;
    debug = true;

    protected current_block: GraphBlock | undefined;
    protected current_identifier = "";
    protected current_value: any;

    constructor(tree: AST) {
        this.tree = tree;
    }

    public visit_tree() {
        printIfDebug(this.debug, "---Starting visiting tree");
        this.tree.get_root().accept(this);
        printIfDebug(this.debug, "---Ending visiting tree");

        // checking branches
        if (this.nb_branches != 0)
            console.error(
                "There are branches that were not visited.. Nb branches left: ",
                this.nb_branches
            );
        else console.info("All nodes visited successfully!");

        // adding the last block to the list
        if (this.current_block != undefined)
            this.blocks.push(this.current_block);

        // if there wasn't a start block
        if (!this.has_start)
            console.error("This program has no start, it won't compile!");
    }

    protected visit_children(node: ASTNode) {
        if (node.get_children().length == 0) {
            this.nb_branches--;
            return;
        }
        node.get_children().forEach((child) => {
            this.nb_branches++;
            child.accept(this);
        });
        this.nb_branches--;
    }

    protected is_current_block_valid() {
        if (this.current_block == undefined)
            throw Error("There is no valid block to enter data into");
    }

    public visit_root(_node: Root) {
        printIfDebug(this.debug, "Root");
    }

    public visit_block(_node: Block) {
        printIfDebug(this.debug, "----- BLOCK -----");
    }

    public visit_block_identity(_node: BlockIdentity) {
        printIfDebug(this.debug, "--IDENTITY");
    }

    public visit_block_io(_node: BlockIO) {
        printIfDebug(this.debug, "--IO");
    }

    public visit_block_links(_node: BlockLinks) {
        printIfDebug(this.debug, "--LINKS");
    }

    public visit_identifier(node: Identifier) {
        this.current_identifier = node.content;
        this.visit_children(node);
    }

    public visit_value(node: Value) {
        this.current_value = node.content;
        this.visit_children(node);
    }

    public visit_identity_statement(_node: IdentityStatement) {
        printIfDebug(
            this.debug,
            `${this.current_identifier}: ${this.current_value}`
        );
    }

    public visit_io_statement(_node: IOStatement) {}

    public visit_link_statement(_node: LinkStatement) {}
}
