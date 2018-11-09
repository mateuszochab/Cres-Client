import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };
  // private head = new HttpHeaders({'Content-Type': 'text/html'});

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  sendFeedback(): void {
    const url = 'http://localhost:8765/feedback';
    this.http.get(url).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert( 'an error has occured while sending feedback');
      }
    );
  }


}

export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
