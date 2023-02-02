import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
HomeComponent


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: 'listar-usuario', component: ListarUsuarioComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
