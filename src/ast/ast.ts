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

    /* https://stackoverflow.com/questions/22038162/printing-a-tree-structure-in-a-list-like-manner-storing-the-indent-strings-whi */
    public print_tree_v2() {
        treeIndent(
            this.get_root().children,
            {
                hasNextSibling: "┣",
                isLastChild: "┗",
                ancestorHasNextSibling: "┃",
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
