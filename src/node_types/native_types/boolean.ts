import { LGraphNode, LiteGraph } from "litegraph.js";

export class Booleen extends LGraphNode {
    constructor() {
        super();

        this.title = "Booléen";

        this.addOutput("", "boolean");
        this.addProperty("value", true, "boolean");

        this.addWidget("toggle", "value", true, "value");
        this.widgets_up = true;
    }

    public onExecute() {
        this.setOutputData(0, this.properties["value"]);
    }

    public onAction(action: any) {
        this.setValue(!this.properties.value);
    }

    public onGetInputs() {
        return [["toggle", LiteGraph.ACTION]];
    }
}
