import { Component } from '@angular/core';
import { AlumnoService } from '../../services/services-alumno/alumno.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  datosUsuario: any = {};
  public samplePagesCollapsed = true;
  constructor(private alumno: AlumnoService) { 
    this.getUsuario('2');
  }

  getUsuario(id: string) {
    this.alumno.getUsuario( id ).subscribe( data => {
      console.log(data);
      this.datosUsuario = data;
    });
  }
}
