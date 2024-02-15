import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ListOfCountriesComponent } from './country/ui/countries/list-of-country/list-of-country.component';
import { GenerateExamComponent } from './country/ui/exam/generate-exam/generate-exam.component';
import { ResolveExamComponent } from './country/ui/exam/resolve-exam/resolve-exam.component';
import { GenerateQuestionComponent } from './country/ui/question/generate/generate-question.component';
import { ResolveQuestionComponent } from './country/ui/question/resolve/resolve-question.component';
import { UserRegistrationComponent } from './user/registration/user-registration.component';
import { UserLogInComponent } from './user/log-in/user-log-in.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
      title: "Main",
      path: "",
      component: StartComponent,
    },
    {
      title: "Country",
      path: "country",
      component: ListOfCountriesComponent,
    },
    {
      title: "Generate exam",
      path: "country/generateExam",
      component: GenerateExamComponent
    },
    {
      title: "Resolve exam",
      path: "country/resolveExam",
      component: ResolveExamComponent
    },
    {
      title: "Generate question",
      path: "country/question/generate",
      component: GenerateQuestionComponent
    },
    {
      title: "Generate question",
      path: "country/question/resolve",
      component: ResolveQuestionComponent
    },
    {
      title: "Registration",
      path: "user/register",
      component: UserRegistrationComponent
    },
    {
      title: "Log in",
      path: "user/logIn",
      component: UserLogInComponent
    },
    {
      title: "Forgotten password",
      path: "user/forgotPassword",
      component: ForgotPasswordComponent
    },
    {
      path: "**",
      redirectTo: "",
      pathMatch: "full",
    },
];
