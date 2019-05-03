import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../services/services-alumno/alumno.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent  {
  datosUsuario: any = {};
  sexo: any = {};
  constructor( private router: ActivatedRoute,
               private alumno: AlumnoService) {
    // Llamar al servicio
    this.getUsuario('2');
  }

  getUsuario(id: string) {
    this.alumno.getUsuario( id ).subscribe( data => {
      console.log(data);
      this.datosUsuario = data;
      this.sexo = data['sexo'];
    });
  }
}

