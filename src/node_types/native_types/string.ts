import { LGraphNode } from "litegraph.js";

export class String extends LGraphNode {
    constructor() {
        super();

        this.title = "String";
        this.size = [180, 30];

        this.addOutput("", "string");
        this.addProperty("value", "", "string");

        this.addWidget("text", "value", "", "value");
        this.widgets_up = true;
    }

    public onExecute() {
        this.setOutputData(0, parseFloat(this.properties["value"]));
    }
}
