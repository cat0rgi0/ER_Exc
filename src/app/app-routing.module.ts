import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { GenericListComponent } from './components/generic/generic-list/generic-list.component';


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
    path: 'generic/:name',
    component: GenericListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
