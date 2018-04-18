import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  list=[
    {
      id:1,
      imagepath:"/assets/milk.png",
      desc:"Full Cream Milk",
      desc1:" Heritage",
      desc2:"208 packets 1lit",
      price:"$1243",
    },
    {
      id:2,
      imagepath:"/assets/milk.png",
      desc:"Full Cream Milk",
      desc1:" Heritage",
      desc2:"208 packets 1lit",
      price:"$1243",
    },
    {
      id:3,
      imagepath:"/assets/milk.png",
      desc:"Full Cream Milk",
      desc1:" Heritage",
      desc2:"208 packets 1lit",
      price:"$1243",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
