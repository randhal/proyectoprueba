import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es');

// Components
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
// Componentes - Alumno
import { FormsComponent } from './alumno/usuario/usuario.component';
import { ActividadesComponent } from './alumno/actividades/actividades.component';
// Componentes - Profesor
import { PerfilProfesorComponent } from './profesor/perfil/perfil-profesor.component';
import { AvancesProfesorComponent } from './profesor/avances/avances-profesor.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacion/login/login.component';

import { AlumnoService } from './services/services-alumno/alumno.service';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    ActividadesComponent,
    PerfilProfesorComponent,
    AvancesProfesorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es'}, AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
