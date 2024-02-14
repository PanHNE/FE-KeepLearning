import { Component, OnChanges, SimpleChanges, inject } from "@angular/core";
import { UserRegisterForm } from "../forms/userRegister.form";
import { UserService } from "../services/user.service";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'user-registration-component',
  templateUrl: './user-registration.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserRegisterForm
  ]
})
export class UserRegistrationComponent {
  public userRegisterForm = inject(UserRegisterForm).form;

  public invalidFormControlClass = "form-control is-invalid";
  public validFormControlClass = "form-control is-valid";
  
  constructor(
    private userService: UserService
  ){}

  onSubmit(){
    console.log("UserRegistrationComponent => onSubmit()");

    this.userService.register(this.userRegisterForm).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}