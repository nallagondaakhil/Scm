import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'required email ' :
        this.email.hasError('email') ? 'Not a valid email':'';
  }
  getPasswordError() {
    return this.password.hasError('required') ? 'required password ' :
        '';
  }
  
  hide = true;
  constructor() { }

  ngOnInit() {
  }

}


