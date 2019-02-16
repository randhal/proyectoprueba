import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

// Services
import { ClienteService } from './clientes/cliente.service';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    DirectivaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
