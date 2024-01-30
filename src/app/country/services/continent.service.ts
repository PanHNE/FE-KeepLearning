import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Continent } from "../../country/models/Continent";

@Injectable({
  providedIn: "root",
})
export class ContinentService {

  private URL = process.env['SERVER_BACKEND_URL'] + '/continent';

  private http: HttpClient = inject(HttpClient);

  getContinents() {
    return this.http.get<Continent[]>(this.URL);
  }

  getNumberOfCountries(continents: string[]) {
    let params = this.createContinentsParam(continents);
    return this.http.get<number>(this.URL + '/numberOfCountries', {params});
  }

  createContinentsParam(continents: string[]): HttpParams {
    let params = new HttpParams();

    for (let index = 0; index < continents.length; index++) {
      params = params.append("Continents", continents[index]);
    }

    return params;
  }
}
