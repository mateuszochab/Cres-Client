import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cresClient';



isLogged(): boolean {

  if (localStorage.getItem('currentUser')) {
    return true;
  } else {
    return false;
  }


}



}
