import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UtilService {

  constructor( private http: HttpClient) { }


  getQuery( query: string) {
    const url = `http://localhost:8090/api/user/${query}`;  // Para no repetir codigo de la url

    return this.http.get(url); // El llamado del servicio
  }

  loginUser( codigo: string ) {
    return this.getQuery(`/login/${ codigo }`);
  }
}
