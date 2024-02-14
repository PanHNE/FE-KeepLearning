import { Component, inject } from "@angular/core";
import { UserRegisterForm } from "../forms/userRegister.form";
import { UserService } from "../services/user.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharingDataService } from "../../country/ui/exam/SharingData.service";
import { Router } from "@angular/router";

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
  private storageName = "Register";

  public userRegisterForm = inject(UserRegisterForm).form;
  public invalidFormControlClass = "form-control is-invalid";
  public validFormControlClass = "form-control is-valid";
  
  constructor(
    private userService: UserService,
    private sharingDataService: SharingDataService,
    private router: Router
  ){}

  onSubmit(){
    this.userService.register(this.userRegisterForm).subscribe({
      next: (result) => {
        this.sharingDataService.setData({type: "success", message: "Now you can log in"}, this.storageName)
        this.router.navigate(['']);
      },
      error: (err) => {
        this.sharingDataService.setData({type: "fail", message: "Something went wrong, please try again latter"}, this.storageName)
        this.router.navigate(['']);
      }
    })
  }
}