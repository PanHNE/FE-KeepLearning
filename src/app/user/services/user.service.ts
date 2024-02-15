import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  logIn(userLoginForm: FormGroup) {
    let serializedForm = JSON.stringify(userLoginForm.value);
    
    return this.http.post<string>(
      this.URL + '/login',
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
