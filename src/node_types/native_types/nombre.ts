import { IWidget, LGraphNode } from "litegraph.js";

export class Nombre extends LGraphNode {
    value_widget: IWidget;

    constructor() {
        super();

        this.title = "Nombre";

        this.addOutput("value", "number");
        this.addProperty("value", 1.0, "number");
        this.value_widget = this.addWidget("number", "value", 1, "value");
        this.widgets_up = true;
    }

    public onExecute() {
        this.setOutputData(0, this.properties["value"]);
    }

    public setValue(v: string) {
        this.properties["value"] = parseFloat(v);
    }

    public onDrawBackground(_: any) {
        //show the current value
        this.outputs[0].label = this.properties["value"].toFixed(3);
        this.value_widget.value = this.properties["value"];
    }
}
