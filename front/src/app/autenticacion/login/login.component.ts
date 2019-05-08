import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/services-util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  codigoUsuario: any = {};
  usuarioInput: any;
  constructor(private router: ActivatedRoute,
    private Util: UtilService) {
      // Llamar al servicio
      // this.loginUser('rlozada');
     }

     loginUser(newHero: string) {
      console.log(newHero);
      this.Util.loginUser( newHero ).subscribe( data => {
        console.log(data);
        this.codigoUsuario = data;
      });
    }
}
