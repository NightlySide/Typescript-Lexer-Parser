import { LGraphNode } from "litegraph.js";

export class Print extends LGraphNode {
    constructor() {
        super();

        this.title = "Print";

        this.addInput("prev", "program_flow");
        this.addInput("message", "string");
        this.addOutput("next", "program_flow");
        this.properties = { precision: 1 };
    }

    public onExecute() {
        let msg: any = this.getInputData(1);
        if (msg === undefined) msg = "";

        console.log(msg);
    }
}
