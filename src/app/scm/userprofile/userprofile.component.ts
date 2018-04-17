import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
public userprofileId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  let id = this.route.snapshot.params['id'];
  this.userprofileId=id;
  }

}
