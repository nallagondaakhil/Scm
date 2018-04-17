import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);
  flat = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  loc = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  pin = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'required name ' :
        this.name.hasError('name') ? 'Not a valid name':'';
   }
   getNumber() {
    return this.number.hasError('required') ? 'required number ' :
        this.number.hasError('number') ? 'Not a valid number':'';
   }
   getEmail() {
    return this.email.hasError('required') ? 'required email ' :
        this.email.hasError('email') ? 'Not a valid email':'';
   }
   getFlat() {
    return this.flat.hasError('required') ? 'required flat ' :
        this.flat.hasError('flat') ? 'Not a valid flat':'';
   }
   getLoc() {
    return this.loc.hasError('required') ? 'required locality ' :
        this.loc.hasError('locality') ? 'Not a valid locality':'';
   }
   getCity() {
    return this.city.hasError('required') ? 'required city ' :
        this.city.hasError('city') ? 'Not a valid city':'';
   }
   getState() {
    return this.state.hasError('required') ? 'required state ' :
        this.state.hasError('state') ? 'Not a valid state':'';
   }
   getPincode() {
    return this.pin.hasError('required') ? 'required pincode ' :
        this.pin.hasError('pin') ? 'Not a valid pincode':'';
   }
  constructor() { }

  ngOnInit() {
  }

}
