import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/services-util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  codigoUsuario: any = {};
  constructor(private router: ActivatedRoute,
    private Util: UtilService) {
       // Llamar al servicio
       this.listaActividades('rlozada');
     }

     listaActividades(usuario: string) {
      this.Util.loginUser( usuario ).subscribe( data => {
        console.log(data);
        this.codigoUsuario = data;
      });
    }
}
