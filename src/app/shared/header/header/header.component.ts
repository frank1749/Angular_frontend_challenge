import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoUser: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    const infouserString = localStorage.getItem('infoUser');
    if (infouserString !== null) {
      // Parsear la cadena JSON
      this.infoUser = JSON.parse(infouserString);
      console.log('infoUser', this.infoUser);
    }
  }

  closeSesion(): void {
    localStorage.removeItem('infoUser');
    this.router.navigate(['/login']);
  }

}
