import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UtilService {
  public storage: Storage = sessionStorage;
  ENDPOINT: String = 'http://localhost:8080/api/';

  constructor( private http: HttpClient) { }

  getHeaders() {
    const auth = this.storage.getItem('auth');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + auth
      })
    };
    return httpOptions;
  }

  get(url: string) {
    const finalURL = this.ENDPOINT + url;
    return this.http.get(finalURL);
  }

  post(url: string, body: Object) {
    const finalURL = this.ENDPOINT + url;
    return this.http.post(finalURL, JSON.stringify(body), this.getHeaders());
  }

}
