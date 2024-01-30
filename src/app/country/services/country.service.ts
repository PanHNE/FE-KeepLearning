import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private URL: string = process.env['SERVER_BACKEND_URL'] + '/country';
  private http: HttpClient = inject(HttpClient);

  getCountries(continents: string[], pageNumber?: number, pageSize?: number) {
        let params = this.createGetCountryParams(continents, pageNumber, pageSize);
    return this.http.get(this.URL, {params, observe: 'response'});
  }

  createGetCountryParams(continents: string[], pageNumber?: number, pageSize?: number): HttpParams {
    let params = new HttpParams();

    for (let index = 0; index < continents.length; index++) {
      params = params.append("Continents", continents[index]);
    }

    if(pageNumber !== undefined) {
      params = params.append("PageNumber", pageNumber);
    }

    if(pageSize !== undefined) {
      params = params.append("PageSize", pageSize);
    }

    return params;
  }
}