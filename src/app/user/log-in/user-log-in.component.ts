import { Component, inject } from "@angular/core";
import { UserService } from "../services/user.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharingDataService } from "../../country/ui/exam/SharingData.service";
import { Router, RouterLink } from "@angular/router";
import { UserLogInForm } from "../forms/user-log-in.form";

@Component({
  selector: 'user-log-in-component',
  templateUrl: './user-log-in.component.html',
  styleUrl: './user-log-in.component.scss',
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
  private storageLogInName = "LogIn";
  private storageAuthToken = "AuthToken";

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
        this.sharingDataService.setData({type: "success", message: "You logged in"}, this.storageLogInName);
        this.sharingDataService.setData(result, this.storageAuthToken);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.sharingDataService.setData({type: "fail", message: "Something went wrong, please try again latter"}, this.storageLogInName)
        this.router.navigate(['']);
      }
    })
  }
}
