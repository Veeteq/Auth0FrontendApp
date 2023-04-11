import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { Item } from '../model/item';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class ItemService {  
  baseUrl: string = `${env.dev.apiUrl}/api/menu/items`;

  items: Observable<Item[]>;

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Item[]> {
    const url = this.baseUrl;
    return this.httpClient.get<Item[]>(url);
  }

  findById(id: number): Observable<Item> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Item>(url);
  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }

  saveItem(item: Item): Observable<Item> {
    const headers = { 'Content-type': 'application/json'};
    const url = this.baseUrl;
    const body = JSON.stringify(item);
    return this.httpClient.post<Item>(`${url}`, body, {'headers': headers});
  }

  getMessage(): Observable<Message> {
    const url = `${this.baseUrl}/message`;
    return this.httpClient.get<Message>(url);
  }  

  updateItem(id: number, item: Item): Observable<Item> {
    const headers = { 'Content-type': 'application/json'};
    const url = `${this.baseUrl}/${id}`;
    const body = JSON.stringify(item);
    console.log(body);
    return this.httpClient.put<Item>(`${url}`, body, {'headers': headers});
  }
}
