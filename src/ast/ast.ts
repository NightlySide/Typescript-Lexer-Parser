import { ASTNode, Root } from "./types";

export class AST {
    root: Root;

    constructor(root?: ASTNode) {
        this.root = new Root();
        if (root != undefined) this.root.add_child(root);
    }

    public get_root(): Root {
        return this.root;
    }

    public print_tree() {
        const t = "├";
        const i = "│";
        const l = "└";
        const indent_size = 2;

        function node_repr(indent: number, bars: number[], node: ASTNode): string {
            function padding(indent: number, bars: number[]): string {
                let res = [];
                res = Array(indent * indent_size).fill(" ");

                bars.forEach((idx, k) => {
                    if (k != 0) res[(idx - 1) * indent_size] = i;
                });
                return res.join("");
            }

            let repr = node.name + "\n";

            if (node.get_children().length == 1) {
                repr += padding(indent, bars) + l;
                repr += node_repr(indent + 1, bars, node.get_children()[0]!);
                bars.pop();
            } else if (node.get_children().length > 1) {
                if (!(indent in bars)) {
                    bars.push(indent);
                }
                node.get_children().forEach((child, idx) => {
                    if (idx == node.get_children().length - 1) {
                        repr += padding(indent, bars) + l;
                        bars.pop();
                    } else {
                        repr += padding(indent, bars) + t;
                    }
                    repr += node_repr(indent + 1, bars, child);
                });
            }

            return repr;
        }

        let repr = "";
        repr = "AST\n" + l;
        repr += node_repr(1, [], this.get_root());

        console.log(repr);
    }

    /* https://stackoverflow.com/questions/22038162/printing-a-tree-structure-in-a-list-like-manner-storing-the-indent-strings-whi */
    public print_tree_v2() {
        treeIndent(
            this.get_root().children,
            {
                hasNextSibling: "├",
                isLastChild: "└",
                ancestorHasNextSibling: "|",
                ancestorIsLastChild: " ",
            },
            function (element: ASTNode, indent: []) {
                let text = element.name;
                if (element.children.length == 0) text += `(${element.content})`;
                console.log(indent.join(" ") + " " + text);
            },
            []
        );
    }
}

function treeIndent(branch: ASTNode[], cfg: any, decorator: any, indent: any[]) {
    branch.forEach(function (node: ASTNode, i) {
        decorator(node, indent.concat(i === branch.length - 1 ? cfg.isLastChild : cfg.hasNextSibling));

        treeIndent(node.children, cfg, decorator, [
            ...indent,
            i === branch.length - 1 ? cfg.ancestorIsLastChild : cfg.ancestorHasNextSibling,
        ]);
    });
}
