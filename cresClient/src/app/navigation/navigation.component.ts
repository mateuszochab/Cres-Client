import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-navigation',
templateUrl: './navigation.component.html',
styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  islogged = false;


  constructor(private router: Router) { }

  ngOnInit() {
    this.isLogged();

  }


  isLogged() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser') === null) {
      this.islogged = false;
    } else {
      this.islogged = true;
    }

  }
  clickLogout() {
    localStorage.removeItem('currentUser');
    location.reload();
    this.router.navigate(['']);
  }


}
