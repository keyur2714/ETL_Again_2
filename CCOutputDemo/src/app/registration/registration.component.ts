import { Component, OnInit } from '@angular/core';
import { Lookup } from '../lookup.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  stateList : Lookup[] = [];
  cityList : Lookup[] = [];

  selectedState : Lookup = new Lookup();
  selectedCity : Lookup = new Lookup();

  constructor() { }

  ngOnInit() {
    let state1 = new Lookup("GJ","Gujrat");
    let state2 = new Lookup("MH","Maharashtra");
    let state3 = new Lookup("MP","Madhya Pradesh");
    this.stateList.push(state1);
    this.stateList.push(state2);
    this.stateList.push(state3);

    let city1 = new Lookup("SRT","Surat");
    let city2 = new Lookup("PUN","Pune");
    let city3 = new Lookup("IND","Indore");
    this.cityList.push(city1);
    this.cityList.push(city2);
    this.cityList.push(city3);

    this.selectedState = this.stateList[0];
    this.selectedCity = this.cityList[0]; 
  }

  getState(state) : void{
    this.selectedState = state;
  }

  getCity(city) : void{
    this.selectedCity = city;
  }
}
