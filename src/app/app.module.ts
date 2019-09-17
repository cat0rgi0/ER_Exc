import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import {TableModule} from 'primeng/table';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { GenericListComponent } from './components/generic/generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GenericListComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TableModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
