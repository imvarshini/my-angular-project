import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  "myReactiveForm":FormGroup;
  constructor() { }

  ngOnInit(): void {
  
  this.myReactiveForm=new FormGroup({
      'fname':new FormControl(null),
      'lname':new FormControl(null),
      'email':new FormControl(!null,[Validators.email,Validators.required]),
      'password':new FormControl(null),
  });
}
onSubmit(){
console.log(this.myReactiveForm);
}
}
