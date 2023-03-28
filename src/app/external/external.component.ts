import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment as env } from 'src/environments/environment';

interface Message {
  message: string
}

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent {
  message: string = "";

  constructor(private http: HttpClient) {}

  callApi(): void {
    this.http
    .get<Message>(`${env.dev.apiUrl}/api/public`)
    .subscribe(
      (data: Message) => {
        this.message = data.message;
      })
  }

  callSecureApi() {
    this.http
    .get<Message>(`${env.dev.apiUrl}/api/private`)
    .subscribe(
      (data: Message) => {
        this.message = data.message;
      }
    )
  }
  
}
