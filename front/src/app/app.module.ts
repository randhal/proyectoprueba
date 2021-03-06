import { UtilService } from './services/services-util/util.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es');

// calendar
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

// Components
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
// Componentes - Alumno
import { UsuarioComponent } from './alumno/usuario/usuario.component';
import { ActividadesComponent } from './alumno/actividades/actividades.component';
// Fotos
import { FotosComponent } from './componentes/fotos/fotos.component';
import { CargaComponent } from './componentes/carga/carga.component';
// Componentes - Profesor
import { PerfilProfesorComponent } from './profesor/perfil/perfil-profesor.component';
import { AvancesProfesorComponent } from './profesor/avances/avances-profesor.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacion/login/login.component';

import { AlumnoService } from './services/services-alumno/alumno.service';
import { LoginService } from './services/services-util/login.service';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioComponent,
    ActividadesComponent,
    PerfilProfesorComponent,
    AvancesProfesorComponent,
    LoginComponent,
    FotosComponent,
    CargaComponent
  ],
  imports: [
    DatePickerModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es'}, UtilService, AlumnoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
