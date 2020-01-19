import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  name : string = 'keyur';
  city : string = 'pune';
  mobileNo : string = '7387029671';
  age : number = 0;

  constructor() { 
    console.log("Personal Information Component Object Created...!");
  }

  ngOnInit() {
    console.log("Personal Information Component Initialized...!");
    this.age = 32;
  }

}
