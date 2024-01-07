import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RegistroProyectoComponent } from './constructor/registro-proyecto/registro-proyecto.component';
import { ListaProyectosComponent } from './constructor/lista-proyectos/lista-proyectos.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'crear-proyecto', 
    component: RegistroProyectoComponent
  },
  { 
    path: 'lista-proyectos', 
    component: ListaProyectosComponent
  },    
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
