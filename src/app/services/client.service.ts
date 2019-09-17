import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Order } from '../components/orders/orders-component/orders-component.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private httpClient: HttpClient) { }

  public getOrders(): Observable<Array<Order>>{
    return this.httpClient.get<Array<Order>>('http://localhost:4200/assets/orders.json')
  }
}
