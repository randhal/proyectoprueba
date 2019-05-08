import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `http://localhost:8091/api/user/${query}`;  // Para no repetir codigo de la url
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('rquispe:123456')
      })
    };
    return this.http.post(url, httpOptions); // El llamado del servicio
  }

  loginUser( codigo: string ) {
    return this.getQuery(`login/${ codigo }`);
  }
}
