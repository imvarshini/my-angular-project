import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  day=true
  LoggedIn="hello"
  title = 'my-pjt2'
  name="bruce"
  newPlaceHolder="first Name"
  disabledBox=true

  num: number= 0;
  

  names=[
    {
      fname:"peter",
      age:22
    },
    {
      fname:"tom",
      age:23
    },
    {
      fname:"jerry",
      age:25
    }

  ]
  
  enableInput(){
    
  this.disabledBox=false
  }
  enableBox(){
    this.disabledBox=true;
  }
  changenewPlaceHolder(){
  this.newPlaceHolder="last Name"
  }
}
