import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root' })
export class OrderHistoryService {

  constructor(private http: HttpClient) {}

  getOrderHistory() {
    return this.http.get('http://localhost:3000/data/');
  }

  postData(param:any){
    return this.http.post('http://localhost:3000/data/' , param);
  }
}
