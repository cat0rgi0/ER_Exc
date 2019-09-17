import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericListComponent } from './components/generic/generic-list/generic-list.component';
import {UsersComponent} from './components/users/users.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
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
