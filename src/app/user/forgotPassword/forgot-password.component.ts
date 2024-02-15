import { Component, inject } from "@angular/core";
import { UserService } from "../services/user.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharingDataService } from "../../country/ui/exam/SharingData.service";
import { Router, RouterLink } from "@angular/router";
import { ForgotPasswordForm } from "../forms/forgot-password.form";


@Component({
  selector: 'forget-password-component',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [
    ForgotPasswordForm
  ]
})
export class ForgetPasswordComponent {
  private storageSendEmail = "SendEmail";

  public forgotPasswordForm = inject(ForgotPasswordForm).form;
  public invalidFormControlClass = "form-control is-invalid";
  public validFormControlClass = "form-control is-valid";
  
  constructor(
    private userService: UserService,
    private sharingDataService: SharingDataService,
    private router: Router
  ){}

  onSubmit(){
    this.userService.forgotPassword(this.forgotPasswordForm).subscribe({
      next: (result) => {
        this.sharingDataService.setData({type: "success", message: "You logged in"}, this.storageSendEmail);
        this.router.navigate(['']);
      },
      error: (err) => {
        this.sharingDataService.setData({type: "fail", message: "Something went wrong, please try again latter"}, this.storageSendEmail)
        this.router.navigate(['']);
      }
    })
  }
}