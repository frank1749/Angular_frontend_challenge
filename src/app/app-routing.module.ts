import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RegistroProyectoComponent } from './constructor/registro-proyecto/registro-proyecto.component';
import { ListaProyectosComponent } from './constructor/lista-proyectos/lista-proyectos.component';
import { SessionStorageGuard } from './guard/session-storage.guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [SessionStorageGuard]
  },
  { 
    path: 'crear-proyecto', 
    component: RegistroProyectoComponent,
    canActivate: [SessionStorageGuard]
  },
  { 
    path: 'lista-proyectos', 
    component: ListaProyectosComponent,
    canActivate: [SessionStorageGuard]
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
