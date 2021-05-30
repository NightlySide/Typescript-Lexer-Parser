import { AST } from "../../compiler/ast/ast";
import { Block, BlockIO, BlockLinks } from "./types";
import { LGraph, LGraphNode, LiteGraph } from "litegraph.js";
import * as ASTTypes from "../../compiler/ast/types";

function ast_to_block(tree: AST): Block[] {
    let blocks: Block[] = tree
        .get_root()
        .get_children()
        .map((block_node) => Block.from_ast_node(block_node));

    return blocks;
}

function block_to_nodes(blocks: Block[]): Map<number, LGraphNode> {
    let nodes = new Map<number, LGraphNode>();

    // creating each node
    blocks.forEach((block) => {
        const node = LiteGraph.createNode(block.type);

        if (node == null) {
            console.log("Cannot build node with type: ", block.type);
        } else {
            node.id = block.id;
            node.pos = [block.pos[0], block.pos[1]];
            if (block.title != undefined) node.title = block.title;
            if (block.value != undefined) node.setValue(block.value);

            nodes.set(block.id, node);
        }
    });

    return nodes;
}

function linking_nodes_on_graph(
    nodes: Map<number, LGraphNode>,
    blocks: Block[]
) {
    // linking the nodes
    blocks.forEach((block) => {
        let linked_node = nodes.get(block.id)!;

        block.links.forEach((link) => {
            let t_node = nodes.get(link.block_id);

            if (t_node == undefined || linked_node == undefined) {
                console.error(
                    `Cannot link current node (id: ${block.id}, slot: ${link.out_id}) with target node (id: ${link.block_id}, slot: ${link.in_id})`
                );
                console.log("Current node", linked_node);
                console.log("Target node", t_node);
                console.log("Link data", link);
            } else {
                console.debug(
                    `Linking current node (id: ${linked_node.id}, slot: ${
                        link.out_id
                    }) with target node (id: ${link.block_id}, slot: ${
                        link.in_id
                    }) of type: ${block.outputs[link.out_id].io_type}`
                );
                linked_node.connect(link.out_id, t_node, link.in_id);
            }
        });
    });
}

function nodes_to_block(graph: LGraph, nodes: LGraphNode[]): Block[] {
    let hashmap = new Map<number, Block>();

    let link_ids = new Set<number>();

    // creating the blocks
    nodes.forEach((node) => {
        let block = new Block();

        // identity
        block.id = node.id;
        block.pos = node.pos;
        block.title = node.title;
        block.type = node.type as string;

        // values
        if (node.properties["value"] != undefined)
            block.value = node.properties["value"];

        // IO
        node.inputs.forEach((input) => {
            let type = input.type as string;
            if (String(type) === "0") type = "anything";

            block.inputs.push(
                new BlockIO("in", input.name, type, input.link?.toString())
            );
        });
        node.outputs.forEach((output) => {
            block.outputs.push(
                new BlockIO(
                    "out",
                    output.name,
                    output.type as string,
                    node.properties["value"]
                )
            );
            output.links?.forEach((link) => link_ids.add(link));
        });

        hashmap.set(block.id, block);
    });

    // adding links
    link_ids.forEach((idx: number) => {
        let link = graph.links[idx];
        let b_origin = hashmap.get(link.origin_id)!;
        let b_target = hashmap.get(link.target_id)!;
        b_origin.links.push(
            new BlockLinks(link.origin_slot, link.target_slot, b_target.id)
        );
    });

    return Array.from(hashmap.values());
}

function blocks_to_ast(blocks: Block[]): AST {
    let tree = new AST();

    blocks.forEach((block) => {
        // Identity
        let id_stmts: ASTTypes.IdentityStatement[] = [
            new ASTTypes.IdentityStatement(
                new ASTTypes.Identifier("id"),
                new ASTTypes.Value(block.id)
            ),
            new ASTTypes.IdentityStatement(
                new ASTTypes.Identifier("type"),
                new ASTTypes.Value(`"${block.type}"`)
            ),
            new ASTTypes.IdentityStatement(
                new ASTTypes.Identifier("pos"),
                new ASTTypes.Value(block.pos.join(","))
            ),
        ];
        if (block.title != "" && block.title != undefined) {
            id_stmts.push(
                new ASTTypes.IdentityStatement(
                    new ASTTypes.Identifier("title"),
                    new ASTTypes.Value(`"${block.title}"`)
                )
            );
        }
        if (block.value != undefined) {
            id_stmts.push(
                new ASTTypes.IdentityStatement(
                    new ASTTypes.Identifier("value"),
                    new ASTTypes.Value(`${block.value}`)
                )
            );
        }

        let id_block = new ASTTypes.BlockIdentity(id_stmts);
        // I/O
        let io_stmts: ASTTypes.IOStatement[] = [];
        block.inputs.forEach((input) => {
            io_stmts.push(
                new ASTTypes.IOStatement(
                    new ASTTypes.Value("in"),
                    new ASTTypes.Value(input.name),
                    new ASTTypes.Value(input.io_type),
                    new ASTTypes.Value(input.value)
                )
            );
        });
        block.outputs.forEach((ouput) => {
            io_stmts.push(
                new ASTTypes.IOStatement(
                    new ASTTypes.Value("out"),
                    new ASTTypes.Value(ouput.name),
                    new ASTTypes.Value(ouput.io_type),
                    new ASTTypes.Value(ouput.value)
                )
            );
        });
        let io_block = new ASTTypes.BlockIO(io_stmts);
        // links
        let links: ASTTypes.LinkStatement[] = [];
        block.links.forEach((link) => {
            links.push(
                new ASTTypes.LinkStatement(
                    new ASTTypes.Value(link.in_id),
                    new ASTTypes.Value(link.out_id),
                    new ASTTypes.Value(link.block_id)
                )
            );
        });
        let link_block = new ASTTypes.BlockLinks(links);

        tree.get_root()
            .get_children()
            .push(new ASTTypes.Block(id_block, io_block, link_block));
    });

    return tree;
}

export {
    ast_to_block,
    block_to_nodes,
    linking_nodes_on_graph,
    nodes_to_block,
    blocks_to_ast,
};
