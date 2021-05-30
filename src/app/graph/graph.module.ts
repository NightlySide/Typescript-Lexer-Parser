import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { GraphComponent } from "./graph.component";

@NgModule({
    declarations: [GraphComponent],
    imports: [BrowserModule],
    providers: [],
    exports: [GraphComponent],
    bootstrap: [GraphComponent],
})
export class GraphModule {}
