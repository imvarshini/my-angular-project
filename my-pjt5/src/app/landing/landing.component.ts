import { Component, OnInit } from '@angular/core';
import { NeedDataService } from '../need-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
userList:any;
  constructor(public dataservice:NeedDataService) { }

  ngOnInit(): void {
    this.dataservice.getUsers().subscribe(
      data=>{
        this.userList=data;
        console.log(this.userList);
      }
    )
  }

}
