import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../services/services-alumno/alumno.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent  {

  actividades: any[] = [];
  constructor(private router: ActivatedRoute,
              private alumno: AlumnoService) {
        // Llamar al servicio
        this.getActividades('2');
  }
  getActividades(id: string) {
    this.alumno.listaActividades( id ).subscribe( data => {
      console.log(data);
      this.actividades = data;
    });
  }
}
