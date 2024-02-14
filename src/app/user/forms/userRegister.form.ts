import { Injectable } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { matchValidator } from "./form-validators";

@Injectable({
    providedIn: "root",
})
export class UserRegisterForm {
    form;
   
    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            Email: ['', [
                Validators.email,
                Validators.required
            ]],
            Password: ['', [
                Validators.required,
                Validators.minLength(3),
                matchValidator('ReenterPassword', true)
            ]],
            ReenterPassword: ['', [
                Validators.required,
                matchValidator('Password')
            ]],
        })
    }
}
