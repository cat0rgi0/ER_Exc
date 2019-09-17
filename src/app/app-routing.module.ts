import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import {UsersComponent} from './components/users/users.component';


const routes: Routes = [
  {
    path: 'orders',
    component: OrdersListComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
