import { LGraphNode } from "litegraph.js";

export class Division extends LGraphNode {
    constructor() {
        super();

        this.title = "Division";

        this.addInput("A", "number");
        this.addInput("B", "number");
        this.addOutput("A/B", "number");
        this.properties = { precision: 1 };
    }

    public onExecute() {
        let A: number = this.getInputData(0);
        if (A === undefined) A = 0;

        let B: number = this.getInputData(1);
        if (B === undefined) B = 1;

        if (B === 0) this.setOutputData(0, Infinity);
        else this.setOutputData(0, A - B);
    }
}
