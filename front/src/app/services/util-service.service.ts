import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UtilServiceService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `https://localhost:8080/${query}`;  // Para no repetir codigo de la url

    return this.http.get(url); // El llamado del servicio
  }

  getLogin( user: string, pass: string){
    return this.getQuery(`${ user }/${pass}`);
  }
}
