import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  

})
export class AppComponent {
  title = 'my-pjt1';
  text='';
  getName(){
    console.log("tom");
    
  }
  getNamee(){
    console.log("jerry");
    
  }
  getNam(){
    console.log("show");
  
  }
  
create(par){
console.log(par);
return par;
}
myEvent(par){
  console.log("par")
}
getUser() {
  console.log("Button is clicked");
}
}
