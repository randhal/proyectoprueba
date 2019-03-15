import { Injectable, Pipe, PipeTransform  } from '@angular/core';
import { Cliente } from './cliente';
// import { CLIENTES } from './clientes.json';
import { Observable } from 'rxjs';
// import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
// rxjs clase 18


@Injectable()
export class ClienteService {
  //Paso 3 declarar la URl endpoint
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  //METODO PARA CREAR PASO 2
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  // Paso 1 inyectamos una dependencia y ademas la variable HTTP
  constructor(private http: HttpClient) { }
  getClientes(): Observable<Cliente[]> {
  //Paso 2
    return this.http.get(this.urlEndPoint).pipe(
      //EJEMPLO TAP
      tap(response => {
        let clientes = response as Cliente[];
        clientes.forEach( cliente => {
          console.log(cliente.nombre);
        });
      }),
      map( (response)  => {
        let clientes = response as Cliente[];
        return clientes.map(cliente => {
          cliente.nombre = cliente.nombre.toLocaleUpperCase();
          return cliente;
      });
      }
      ),
      tap(response => {
        console.log('ClienteService: tap2');
        response.forEach(cliente => {
          console.log(cliente.nombre);
        }
        );
      })
    );
  }

  //METODO PARA CREAR PASO 1
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders} );
  }
  //CARGANDO LOS DATOS EN EL FORMULARIO PARA ACTUALIZAR
  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }
  //METODO PARA ACTUALIZAR
  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente , { headers: this.httpHeaders} );
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}` , { headers: this.httpHeaders} );
  }
}
