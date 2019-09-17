import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenericListComponent } from './components/generic/generic-list/generic-list.component';


const routes: Routes = [
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
