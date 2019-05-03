import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './alumno/usuario/usuario.component';
import { ActividadesComponent } from './alumno/actividades/actividades.component';
import { PerfilProfesorComponent } from './profesor/perfil/perfil-profesor.component';
import { AvancesProfesorComponent } from './profesor/avances/avances-profesor.component';
import { LoginComponent } from './autenticacion/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: '',  }, // cualquier path vacio me regresa al home
  {path: 'mantenimientoUsuario', component : UsuarioComponent},
  {path: 'misActividades', component : ActividadesComponent},
  {path: 'perfil-profesor', component : PerfilProfesorComponent},
  {path: 'avances-profesor', component : AvancesProfesorComponent},
  {path: 'login', component : LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
