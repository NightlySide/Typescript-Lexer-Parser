import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    templateUrl: "./upload.component.html",
    styleUrls: ["./upload.component.css"],
})
export class UploadDialogComponent {
    form: FormGroup;
    program: string = "";

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<UploadDialogComponent>
    ) {
        this.form = this.form = this.formBuilder.group({
            program: "",
        });
    }

    /*ngOnInit() {
        this.form = this.formBuilder.group({
            filename: "",
        });
    }*/

    submit(form: FormGroup) {
        this.dialogRef.close(`${form.value.program}`);
    }
}
