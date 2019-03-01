import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormsComponent } from './usuario/usuario.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { PerfilProfesorComponent } from './profesor/perfil/perfilProfesor.component';

const routes: Routes = [
  {path: '', redirectTo:'/clientes', pathMatch:'full' },
  {path: 'directivas', component : DirectivaComponent },
  {path: 'clientes', component : ClientesComponent },
  {path: 'clientes/form', component : FormComponent},
  {path: 'miResumen', component : FormsComponent},
  {path: 'misActividades', component : ActividadesComponent},

  {path: 'perfilProfesor', component : PerfilProfesorComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
