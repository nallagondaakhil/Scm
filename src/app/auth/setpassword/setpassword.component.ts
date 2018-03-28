import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  cpassword = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.cpassword.hasError('required') ? 'required password ' :
        this.cpassword.hasError('cpassword') ? 'Not a valid password':'';
  }
  getPasswordError() {
    return this.confirmpassword.hasError('required') ? 'Confirm password ' :
        // this.password.hasError('password') ? 'Not a valid password' :
        '';
  }
  hide = true;
  constructor() { }

  ngOnInit() {
  }

}
