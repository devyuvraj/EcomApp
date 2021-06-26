import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  headers = new HttpHeaders();
  header = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  constructor(
    private http: HttpClient,
    ) {
    }

    private getBaseUrl() {
      return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'
    }

    public getProductsList(): Observable<any> {
      return this.http.get(this.getBaseUrl() + 'assets/api/productLists.json');
    }

    public getCartItems(): Observable<any> {
      return this.http.get(this.getBaseUrl() + 'assets/api/cartDetails.json');
    }

}
