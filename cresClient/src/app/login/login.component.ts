import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service_shared/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginViewModel = {
    email: '',
    password: ''
  };


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }


  loggedUser(): void {
    this.apiService.getLoggedUser(this.model).subscribe(
      resp => {
      // location.reload();
      // console.log(resp.headers.get('Authorization'));
      const token = resp.headers.get('Authorization');
      if (token) {
        localStorage.setItem('currentUser', JSON.stringify({email: this.model.email, token: token}));
        this.router.navigate(['feedback']);
      } else {
        location.reload();
      }
    },
      err => {
        alert( 'an error has occured while sending user credentials');
      }
    );
    }

}

export interface LoginViewModel {
  email: string;
  password: string;
}
