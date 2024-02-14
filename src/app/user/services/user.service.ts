import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class UserService {

  private URL = process.env['SERVER_BACKEND_URL'];

  private http: HttpClient = inject(HttpClient);

  register(userRegisterForm: FormGroup) {
    let serializedForm = JSON.stringify(userRegisterForm.value);

    console.log("UserService => serializedForm");
    console.log(serializedForm);
    return this.http.post<string>(
      this.URL + '/register',
      serializedForm,
      {
        headers: new HttpHeaders({
          "Content-Type": 'application/json; charset=utf-8',
          "Accept": "*/*"
        })
      },        
    );
  }
}
