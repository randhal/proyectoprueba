import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/services-util/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  codigoUsuario: any = {};
  usuarioInput: any;
  constructor(private router: ActivatedRoute,
    private LoginService: LoginService) {
      // Llamar al servicio
      // this.loginUser('rlozada');
     }

     loginUser(user: string, password: string) {
      this.LoginService.loginUser(user, password).subscribe( data => {
        console.log(data);
        this.codigoUsuario = data;
      });
    }
}
