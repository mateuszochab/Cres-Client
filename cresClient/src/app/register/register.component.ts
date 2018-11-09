import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterViewModel = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {}


  sendCredentials(): void {
    const url = 'http://localhost:8765/register';
    this.http.post(url, this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert( 'an error has occured while sending user credentials');
      }
    );
  }


}

export interface RegisterViewModel {
  name: string;
  email: string;
  password: string;
}
