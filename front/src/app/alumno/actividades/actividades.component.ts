import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../services/services-alumno/alumno.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html'
})
export class ActividadesComponent  {
  actividad: any = {};
  constructor(private router: ActivatedRoute,
              private alumno: AlumnoService) {
        console.log(this.getArtista);
        // Llamar al servicio
        this.getArtista('2');

  }
  getArtista(id: string) {

    this.alumno.getAlumno( id ).subscribe( data => {
      console.log(data);
      this.actividad = data;
    });
  }
}
