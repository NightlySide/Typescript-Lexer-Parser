import { Component, HostListener, OnInit } from "@angular/core";

import { LGraph, LGraphCanvas, LGraphNode, LiteGraph } from "litegraph.js";
import registerNodes from "../../node_types/registry";

import { lex } from "../../compiler/lexer/lexer";
import { printTokens } from "../../compiler/lexer/utils";
import { Parser } from "../../compiler/parser/parser";
import words from "../../compiler/lexer/words";
import { AST } from "src/compiler/ast/ast";
import {
    ast_to_block,
    block_to_nodes,
    linking_nodes_on_graph,
    nodes_to_block,
    blocks_to_ast,
} from "./utils";

@Component({
    selector: "node-graph",
    templateUrl: "./graph.component.html",
    styleUrls: ["./graph.component.css"],
})
export class GraphComponent implements OnInit {
    title = "BluePrintF";
    ast: AST = new AST();
    canvas: LGraphCanvas | undefined;
    graph: LGraph = new LGraph();
    nodes: LGraphNode[] = [];

    parseProgram(program: string) {
        let tokens = lex(program, words);
        printTokens(tokens);
        let parser = new Parser(tokens);
        parser.parse();
        parser.ast.print_tree_v2();
        this.ast = parser.ast;
    }

    async loadingTree() {
        let prgm = await fetch(
            "https://nightlyside.github.io/Typescript-Lexer-Parser/assets/data/simple_add_func.vpy"
        );
        this.parseProgram(await prgm.text());
    }

    @HostListener("window:resize", ["$event"])
    onResize(_: Event) {
        if (this.canvas != undefined) {
            this.fitToContainer(this.canvas.canvas);
        }
    }

    fitToContainer(canvas: HTMLCanvasElement) {
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    async ngOnInit() {
        LiteGraph.clearRegisteredTypes();
        registerNodes();

        this.graph = new LiteGraph.LGraph();
        this.canvas = new LGraphCanvas("#graph-canvas", this.graph);
        this.fitToContainer(this.canvas.canvas);

        //node_time.connect(0, node_console, 1);
        await this.loadingTree();
        this.add_tree_to_graph();
    }

    add_tree_to_graph() {
        let blocks = ast_to_block(this.ast);
        let nodes = block_to_nodes(blocks);

        this.graph = new LGraph();
        this.graph.attachCanvas(this.canvas as LGraphCanvas);

        nodes.forEach((node: LGraphNode) => {
            this.graph.add(node);
        });
        this.nodes = Array.from(nodes.values());

        linking_nodes_on_graph(nodes, blocks);
        this.graph.runStep(1);
    }

    update_nodes() {
        this.nodes = this.graph.serialize().nodes as LGraphNode[];
        let blocks = nodes_to_block(this.graph, this.nodes);
        this.ast = blocks_to_ast(blocks);
    }
}
