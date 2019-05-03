import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AlumnoService } from '../../services/services-alumno/alumno.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent  {

  datosUsuario: any = {};

  public sidebarOpened = false;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    } else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig,
              private alumno: AlumnoService) {
    config.placement = 'bottom-right';
    this.getUsuario('2');
   }

   getUsuario(id: string) {
    this.alumno.getUsuario( id ).subscribe( data => {
      console.log(data);
      this.datosUsuario = data;
    });
  }

}
