import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  projects: any = [];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.apiService.getProjects().subscribe(
      res => {
        console.log(res);
        this.projects = res;
      },
      err =>{
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.error.msg
        });
      }
    );
  }

}
