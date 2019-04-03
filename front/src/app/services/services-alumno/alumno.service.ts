import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AlumnoService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `http://localhost:8090/api/user/${query}`;  // Para no repetir codigo de la url
    return this.http.get(url); // El llamado del servicio
  }

  listaActividades( id: string ) {
    return this.getQuery(`${ id }/activity`)
      .pipe( map( data => {
        return data['content']; // de la data busque la propiedad content
      }));
  }

  getUsuario( codigoUsuario: string ) {
    return this.getQuery(`${ codigoUsuario }`);
  }
}
