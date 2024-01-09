import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registro-proyecto',
  templateUrl: './registro-proyecto.component.html',
  styleUrls: ['./registro-proyecto.component.css']
})
export class RegistroProyectoComponent implements OnInit {

  form!: FormGroup;
  infoUser: any = {};

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.form = this.formBuilder.group({
      nombreProyecto: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      items: this.formBuilder.array([], Validators.required)
    });
  }

  getUserType() {
    const infouserString = localStorage.getItem('infoUser');
    if (infouserString !== null) {
      // Parsear la cadena JSON
      this.infoUser = JSON.parse(infouserString);
      return this.infoUser.type;
    }
  }

  // Getter conveniente para acceder a los controles del FormArray de ítems
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  // Método para agregar ítem
  addItem() {
    const item = this.formBuilder.group({
      item: '',
      valorUnitarioActual: ''
    });

    this.items.push(item);
  }
  // Método para eliminar ítem
  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onFormSubmit(): void {
    console.log('form values:', this.form.value);
    const userType = this.getUserType();
    if(userType === environment.typeUser.con) {
      this.apiService.createProject(this.form.value).subscribe(
        res => {
          Swal.fire({
            title: "Buen trabajo!",
            text: "Proyecto creado exitosamente!",
            icon: "success"
          });
          this.initForm();
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
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Solo el usuario Constructor puede crear proyectos"
      });
    }
    
  }

}
