import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

export interface Order{
  Order: string,
  Date: string,
  ProductList: string,
  UserOwnerId: number,
  TotEuro: number
}

@Component({
  selector: 'app-orders-component',
  templateUrl: './orders-component.component.html',
  styleUrls: ['./orders-component.component.css']
})

export class OrdersComponentComponent implements OnInit {

  orders: Array<Order>;
  columns = [
    "Order",
    "Date",
    "ProductList",
    "UserOwnerId",
    "TotEuro"
  ]

  constructor(
    private clientService: ClientService) { }

  ngOnInit() {
      this.clientService.getOrders().subscribe(orders => 
        {
          this.orders = orders
        });
      
        
  }
  
}
