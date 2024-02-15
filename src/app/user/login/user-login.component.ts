import { Component, inject } from "@angular/core";
import { UserService } from "../services/user.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharingDataService } from "../../country/ui/exam/SharingData.service";
import { Router, RouterLink } from "@angular/router";
import { UserLogInForm } from "../forms/userLogIn.form";


@Component({
  selector: 'user-logIn-component',
  templateUrl: './user-logIn.component.html',
  styleUrl: './user-logIn.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [
    UserLogInForm
  ]
})
export class UserLogInComponent {
  private storageName = "LogIn";

  public userLogInForm = inject(UserLogInForm).form;
  public invalidFormControlClass = "form-control is-invalid";
  public validFormControlClass = "form-control is-valid";
  
  constructor(
    private userService: UserService,
    private sharingDataService: SharingDataService,
    private router: Router
  ){}

  onSubmit(){
    this.userService.logIn(this.userLogInForm).subscribe({
      next: (result) => {
        this.sharingDataService.setData({type: "success", message: "You logged"}, this.storageName);
        console.log("UserLogInComponent" + result);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.sharingDataService.setData({type: "fail", message: "Something went wrong, please try again latter"}, this.storageName)
        this.router.navigate(['']);
      }
    })
  }
}