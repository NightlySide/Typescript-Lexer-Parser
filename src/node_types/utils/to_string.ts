import { LGraphNode } from "litegraph.js";

export class ToString extends LGraphNode {
    constructor() {
        super();

        this.title = "To String";

        this.addInput("in", "");
        this.addOutput("out", "string");
    }

    public onExecute() {
        let in_data: any = this.getInputData(0);
        if (in_data === undefined) in_data = 0;

        this.setOutputData(0, String(in_data));
    }
}
