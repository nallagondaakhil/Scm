import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from '../app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { ProductComponent } from './product/product.component';
import { CalenderService } from './calender/calender.service';
import { DashboardService } from './dashboard/dashboard.service';
import { ProductService } from './product/product.service';
import { UsersService } from './users/users.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes=[
  {path : 'dashboard', component : DashboardComponent},
  {path : 'users', component : UsersComponent},
  {path : 'Calender', component : CalenderComponent },
  {path : 'product', component : ProductComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [ RouterModule],
  providers: [CalenderService,DashboardService,ProductService,UsersService],
  bootstrap: [AppComponent]
})
export class ScmModule { }