import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoUser: any = {};

  constructor() { }

  ngOnInit(): void {
    const infouserString = localStorage.getItem('infoUser');
    if (infouserString !== null) {
      // Parsear la cadena JSON
      this.infoUser = JSON.parse(infouserString);
      console.log('infoUser', this.infoUser);
    }
  }

}
