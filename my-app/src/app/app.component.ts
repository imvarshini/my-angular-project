import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name="varsha";
  getName(){
    return this.name;
  }

  arr=[1,2,3];
  
  person={
    name:"tom"
  };
}
