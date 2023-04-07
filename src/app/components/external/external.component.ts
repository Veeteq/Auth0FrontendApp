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
  private baseUrl = `${env.dev.apiUrl}/api`;
  message: string = "";

  constructor(private http: HttpClient) {}

  callApi(): void {
    const url = `${this.baseUrl}/public`;
    this.http.get<Message>(url).subscribe(
      (data: Message) => {
        this.message = data.message;
      })
  }

  callSecureApi() {
    const url = `${this.baseUrl}/private`
    this.http.get<Message>(url).subscribe(
      (data: Message) => {
        this.message = data.message;
      }
    )
  }
  
}
