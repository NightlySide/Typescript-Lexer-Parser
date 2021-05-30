import { ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { LGraphNode } from "litegraph.js";
import { GraphComponent } from "./graph/graph.component";
import { nodes_to_block, blocks_to_ast } from "./graph/utils";
import { ASTToPythonCode } from "../compiler/generator/generator";
import { MatDialog } from "@angular/material/dialog";
import { UploadDialogComponent } from "./upload_modal/upload.component";
import { PrettyPrinter } from "src/compiler/visitor/pretty_printer";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    code_content: string =
        "Click the refresh button to generate python code from the diagram";
    @ViewChild(GraphComponent) node_graph!: GraphComponent;

    constructor(private dialog: MatDialog) {}

    downloadFile(data: string, filename: string) {
        var a = document.createElement("a");
        a.setAttribute("display", "none");
        document.body.appendChild(a);
        const blob = new Blob([data], { type: "text/text" });
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    saveGraph() {
        console.log("Saving");
        if (this.node_graph != undefined) {
            let new_blocks = nodes_to_block(
                this.node_graph.graph,
                this.node_graph.graph.serialize().nodes as LGraphNode[]
            );
            this.node_graph.ast = blocks_to_ast(new_blocks);

            let pretty_printer = new PrettyPrinter(this.node_graph.ast);
            this.code_content = pretty_printer.pretty_print();
            this.downloadFile(this.code_content, "MyAwesomeProgram.vpy");
        } else {
            console.log("node graph undefined...");
        }
    }

    refreshCode() {
        console.log("Turning the nodes into a beautiful tree");
        this.node_graph.update_nodes();

        console.log("Generating code...");
        this.code_content = ASTToPythonCode(this.node_graph.ast);

        console.log("Visiting tree..");
        let printer = new PrettyPrinter(this.node_graph.ast);
        console.log(printer.pretty_print());
    }

    sendFile(target: any) {
        const files: FileList = target.files;
        console.log(files);
    }

    uploadFile() {
        console.log("Uploading data");
        let upload_dialog = this.dialog.open(UploadDialogComponent, {
            maxWidth: "90vw",
            minWidth: "60vw",
        });

        upload_dialog.afterClosed().subscribe((program: string | undefined) => {
            if (program == undefined || program == "") {
                console.info("No program given.. exiting..");
                return;
            }
            console.log("Loading program...");
            this.node_graph.parseProgram(program);
            this.node_graph.add_tree_to_graph();
        });
    }

    changeCode(value: string) {
        this.code_content = value;
    }
}
