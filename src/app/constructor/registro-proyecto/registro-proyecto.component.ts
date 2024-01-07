import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.form = this.fb.group({
      nombreProyecto: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required]
    });
  }

  onFormSubmit(): void {
    console.log('Name:', this.form.value);
    this.apiService.createProject(this.form.value).subscribe(
      res => {
        alert('Registro creado');
        this.initForm();
      },
      err =>{
        console.log(err);
      }
    );
  }

}
