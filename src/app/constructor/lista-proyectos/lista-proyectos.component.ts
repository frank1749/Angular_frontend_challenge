import { Component, OnInit } from '@angular/core';
import { ProjectDataInterface, ApplicationDataInterface } from 'src/app/interfaces/project-data.interface';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import 'moment/locale/es';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  projects: any = [];
  infoUser: any = {};

  constructor(private apiService: ApiService) {
    moment.locale('es');
  }

  ngOnInit(): void {
    this.getProjects();
    this.getDataUser();
  }

  getProjects(): void {
    this.apiService.getProjects().subscribe(
      (res: any) => {
        console.log(res);
        this.projects = res;
      },
      err => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.msg
        });
      }
    );
  }

  getDataUser(): void {
    const infouserString = localStorage.getItem('infoUser');
    if (infouserString !== null) {
      // Parsear la cadena JSON
      this.infoUser = JSON.parse(infouserString);
    }
  }

  onButtonClick(projectItems: ProjectDataInterface): void {
    const dataForAPlication: ApplicationDataInterface = {
      idUsuario: this.infoUser.id,
      nombreUsuario: this.infoUser.name,
      emailUsuario: this.infoUser.email,
      tipoUsuario: this.infoUser.type,
      idProyecto: projectItems._id
    };
    if (this.infoUser.type === environment.typeUser.pro) {
      this.apiService.createApplication(dataForAPlication).subscribe(
        res => {
          const dataFinalItems = {
            idProyecto: projectItems._id,
            dataItems: projectItems.items
          }
          this.updateItemsFromProject(dataFinalItems);
          Swal.fire({
            title: "Buen trabajo!",
            text: "Aplicación creada exitosamente!",
            icon: "success"
          }).then(() => {
            this.getProjects();
          });
        },
        err => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.error.msg
          });
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Solo el usuario Constructor puede crear proyectos"
      });
    }
  }

  updateItemsFromProject(dataFinalItems: any): void {
    this.apiService.updateItemsProject(dataFinalItems).subscribe(
      (res: any) => {
        console.log('result update', res)
      },
      err => {
        console.log(err);
      }
    );
  }

}