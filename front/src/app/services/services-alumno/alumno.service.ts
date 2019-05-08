import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AlumnoService {

  constructor( private http: HttpClient) { }

  getQueryAuth( query: string) {
    const url = `http://localhost:8091/api/user/${query}`;  // Para no repetir codigo de la url
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('rquispe:123456')
      })
    };
    return this.http.get(url, httpOptions); // El llamado del servicio
  }

  listaActividades( id: string ) {
    return this.getQueryAuth(`${ id }/activity`)
      .pipe( map( data => {
        return data['content']; // de la data busque la propiedad content
      }));
  }

  getUsuario( codigoUsuario: string ) {
    return this.getQueryAuth(`${ codigoUsuario }`);
  }
}
