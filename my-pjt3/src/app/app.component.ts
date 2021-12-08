import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pjt3';
  fname:string='';
  lname:string='';
  age:string='';
  exercise:string='';
  movies:string='';
  yes:string='';
  no:string='';
  terms:boolean=false;

  textcolor="blue";
  bgcolor="pink";
  stylecolor="newFont";
  backgroundcolor="changecolor";
  dateExample=Date.now();

  onSubmit(formValue:NgForm){
    console.log(formValue.value)
     console.log(formValue)
  }
  resetForm(formValue:NgForm){
    formValue.reset();
  }
}
