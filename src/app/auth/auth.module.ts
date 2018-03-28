import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

const routes: Routes=[
  { path: 'login', component : LoginComponent },
  { path: 'setpassword', component: SetpasswordComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    SetpasswordComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    FormsModule,
     ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    MatInputModule
    
  ],
  exports: [ RouterModule],
  providers: [AuthService]
})
export class AuthModule { }