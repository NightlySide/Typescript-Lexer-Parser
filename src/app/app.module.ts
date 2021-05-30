import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { GraphModule } from "./graph/graph.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UploadDialogComponent } from "./upload_modal/upload.component";

@NgModule({
    declarations: [AppComponent, UploadDialogComponent],
    imports: [
        BrowserModule,
        GraphModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatInputModule,
    ],
    entryComponents: [MatDialogModule, UploadDialogComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
