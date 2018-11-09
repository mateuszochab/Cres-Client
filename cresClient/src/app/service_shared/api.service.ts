import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private AUTHORIZATION_URL = 'http://localhost:8765/auth/';
  private LOGGED_HOME = 'http://localhost:8765/feedback/';
  private head = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) {

   }

  getLoggedUser(credentials: LoginViewModel): Observable<any> {

    return this.http.post<LoginViewModel>(this.AUTHORIZATION_URL, credentials, { headers: this.head, observe: 'response'} );
  }
  getToken(): String {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.token;
    // return token ? token : '';
    return token;
  }
  loggedToHome(): Observable<any> {
    return this.http.get(this.LOGGED_HOME);



  }

  logout(): void {
      // clear token remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  }
