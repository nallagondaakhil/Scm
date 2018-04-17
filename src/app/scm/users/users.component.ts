import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
list=[
  {
   id:1,
   name:"Bunny Akhil",
   mobile:"+91-9603787350",
   email:"akhilbunny98@gmail.com",
   address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
   paymentdue:"Payments Due",
   amount:"$ 1500"
  },
  {
    id:2,
    name:"Sairam",
    mobile:"+91-9603787350",
    email:"akhilbunny98@gmail.com",
    address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
    paymentdue:"Payments Due",
    amount:"$ 1500"
   },
   {
    id:3,
    name:"Harsha",
    mobile:"+91-9603787350",
    email:"akhilbunny98@gmail.com",
    address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
    paymentdue:"Payments Due",
    amount:"$ 1500"
   },
   {
    id:4,
    name:"Srikanth",
    mobile:"+91-9603787350",
    email:"akhilbunny98@gmail.com",
    address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
    paymentdue:"Payments Due",
    amount:"$ 1500"
   },
   {
    id:5,
    name:"Krupa",
    mobile:"+91-9603787350",
    email:"akhilbunny98@gmail.com",
    address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
    paymentdue:"Payments Due",
    amount:"$ 1500"
   }
]
  constructor(private router:Router) { }

  ngOnInit() {
  }
 onSelect(item:any){
   this.router.navigate(['dashboard/userprofile'],{queryParams: {'id':item.id}});
   console.log(item);
 }
}
