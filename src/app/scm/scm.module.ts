import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { ProductComponent } from './product/product.component';

import { CalenderService } from './calender/calender.service';
import { DashboardService } from './dashboard/dashboard.service';
import { ProductService } from './product/product.service';
import { UsersService } from './users/users.service';
import { Routes, RouterModule } from '@angular/router';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'users', component: UsersComponent },
      { path: 'calender', component: CalenderComponent },
      { path: 'product', component: ProductComponent },
      { path: 'dashboardhome', component: DashboardhomeComponent },
      { path: 'personaldetails', component: PersonaldetailsComponent },
      { path: 'userregistration', component: UserregistrationComponent },
      { path:'userprofile', component:UserprofileComponent}
    ]
  },

];
@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductComponent,
    DashboardhomeComponent,
    PersonaldetailsComponent,
    UserregistrationComponent,
    UserprofileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  // exports: [ RouterModule],
  providers: [CalenderService, DashboardService, ProductService, UsersService],

})
export class ScmModule { }