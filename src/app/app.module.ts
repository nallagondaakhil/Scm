import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { ScmModule } from './scm/scm.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
    BrowserModule,
    AuthModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
