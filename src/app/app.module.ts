import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponentComponent } from './components/orders/orders-component/orders-component.component';
import { OrdersDetailComponent } from './components/orders/orders-detail/orders-detail.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { ProductsComponentComponent } from './components/products/products-component/products-component.component';
import { UsersDetailComponent } from './components/users/users-detail/users-detail.component';
import { UsersComponentComponent } from './components/users/users-component/users-component.component';
import {TableModule} from 'primeng/table';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
