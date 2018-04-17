import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  mail = new FormControl('', [Validators.required]);
  mobile = new FormControl('',[Validators.required]);
  pass = new FormControl('', [Validators.required]);
  conf = new FormControl('', [Validators.required]);
  hide = true;
  hide1 = true;

  getnameError() {
    return this.name.hasError('required') ? 'required name ' :'';
        // this.name.hasError('name') ? 'Not a valid name':'';
   }
   getmailError() {
    return this.mail.hasError('required') ? 'required mail ' :'';
        // this.mail.hasError('mail') ? 'Not a valid mail':'';
   }
   getmobileError() {
    return this.mobile.hasError('required') ? 'required number ' :'';
        // this.mobile.hasError('mobile') ? 'Not a valid number':'';
   }
   getpassError() {
    return this.pass.hasError('required') ? 'required password ' :'';
        // this.pass.hasError('pass') ? 'Not a valid password':'';
   }
   getconfError() {
    return this.conf.hasError('required') ? 'required password ' :'';
        // this.conf.hasError('conf') ? 'Not a valid password':'';
   }
  constructor() { }

  ngOnInit() {
  }

}
