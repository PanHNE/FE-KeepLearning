import { Injectable } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"

@Injectable({
    providedIn: "root",
})
export class ForgotPasswordForm {
    form;
   
    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            Email: ['', [
                Validators.email,
                Validators.required
            ]]
        })
    }
}
