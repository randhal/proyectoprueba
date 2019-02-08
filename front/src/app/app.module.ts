import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router'; // 1 ROUTER
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component'; // Sirve para conectarnos con los servicios
import { FormsModule } from '@angular/forms';

const routes: Routes = [  // 2 Arreglo de rutas
    {path: '',redirectTo:'/clientes',pathMatch:'full' },
    {path: 'directivas',component : DirectivaComponent },
    {path: 'clientes',component : ClientesComponent },
    {path: 'clientes/form',component : FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Utiliza para la clase Service
    RouterModule.forRoot(routes), // 3 REGISTRAR EL ROUTER
    FormsModule  // Sirve para trabajar con formularios
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
