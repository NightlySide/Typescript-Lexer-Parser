import { LGraphNode } from "litegraph.js";

export class ProgramStart extends LGraphNode {
    constructor() {
        super();

        this.title = "Program Start";

        this.addOutput("next", "program_flow");
    }
}
