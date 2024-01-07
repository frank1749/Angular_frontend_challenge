import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  validateEmailValue(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  onFormSubmit(): void {
    const validEmail = this.validateEmailValue(this.form.value.email);
    if(validEmail){
      this.apiService.initSession(this.form.value).subscribe(
        (res: any) => {
          console.log('Result login', res.data);
          localStorage.setItem('infoUser', JSON.stringify(res.data));
          this.router.navigate(['/home']);
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
      Swal.fire("Ingrese un Email válido!");
    }    
  }

}
