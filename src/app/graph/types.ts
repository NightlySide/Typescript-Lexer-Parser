import { ASTNode } from "../../compiler/ast/types";

class Block {
    id: number = -1;
    type: string = "";
    pos: number[] = [0, 0];
    title: string | undefined;
    value: any;
    inputs: BlockIO[] = [];
    outputs: BlockIO[] = [];
    links: BlockLinks[] = [];

    public static from_ast_node(node: ASTNode): Block {
        const block_id = node.get_children()[0]!;
        const block_io = node.get_children()[1]!;
        const block_links = node.get_children()[2] || new ASTNode("empty");
        let res = new Block();

        // parsing id
        block_id.get_children().forEach((id_st) => {
            const param = id_st.get_children()[0].content;
            switch (param) {
                case "id":
                    const id = id_st.get_children()[1].content;
                    res.id = parseInt(id);
                    break;
                case "type":
                    const b_type = id_st.get_children()[1].content.slice(1, -1);
                    res.type = b_type;
                    break;
                case "pos":
                    const pos_v = id_st.get_children()[1].content.slice(1, -1);
                    const data = pos_v.split(",");
                    res.pos = [parseInt(data[0]), parseInt(data[1])];
                    break;
                case "title":
                    const t_value = id_st
                        .get_children()[1]
                        .content.slice(1, -1);
                    res.title = t_value;
                    break;
                case "value":
                    const v_value = id_st.get_children()[1].content;
                    res.value = v_value;
                    break;
                default:
                    console.error(
                        `Couldn't understand id_param: ${param}, with arg: ${
                            id_st.get_children()[1].content
                        }`
                    );
                    break;
            }
        });

        // parsing IO
        block_io.get_children().forEach((io_st) => {
            const in_out = io_st.get_children()[0].content as InputType;
            const name = io_st.get_children()[1].content;
            const io_type = io_st.get_children()[2].content;
            const value = io_st.get_children()[3].content;

            const block_io = new BlockIO(in_out, name, io_type, value);
            if (in_out == "in") res.inputs.push(block_io);
            else res.outputs.push(block_io);
        });

        // parsing links
        block_links.get_children().forEach((link_st) => {
            const out_id = parseInt(String(link_st.get_children()[0].content));
            const in_id = parseInt(String(link_st.get_children()[1].content));
            const block_id = parseInt(
                String(link_st.get_children()[2].content)
            );
            res.links.push(new BlockLinks(out_id, in_id, block_id));
        });

        return res;
    }

    public export_string(): string {
        let res = "====\n";

        // identity
        res += `\tid: ${this.id}\n`;
        res += `\ttype: "${this.type}"\n`;
        res += `\tpos: (${this.pos[0]}, ${this.pos[1]})\n`;
        if (this.title != undefined) res += `\ttitle: "${this.title}"\n`;
        if (this.value != undefined) res += `\tvalue: ${this.value}\n`;
        // i/o
        res += "\t----\n";
        this.inputs.forEach((input) => {
            res += `\tin: "${input.name}", ${input.io_type}, ${input.value}\n`;
        });
        this.outputs.forEach((output) => {
            res += `\tout: "${output.name}", ${output.io_type}, ${output.value}\n`;
        });
        // connexions
        if (this.links.length > 0) {
            res += "\t----\n";
            this.links.forEach((link) => {
                res += `\tconn: ${link.out_id} ---> ${link.block_id}, ${link.in_id}\n`;
            });
        }
        res += "====\n\n";

        return res;
    }
}

type InputType = "in" | "out";
class BlockIO {
    in_or_out: InputType;
    name: string;
    io_type: string;
    value: any;

    constructor(
        in_or_out: InputType,
        name: string,
        io_type: string,
        value: any
    ) {
        this.in_or_out = in_or_out;
        this.name = name;
        this.io_type = io_type;
        this.value = value;
    }
}

class BlockLinks {
    out_id: number;
    in_id: number;
    block_id: number;

    constructor(out_id: number, in_id: number, block_id: number) {
        this.out_id = out_id;
        this.in_id = in_id;
        this.block_id = block_id;
    }
}

export { Block, BlockIO, BlockLinks };
