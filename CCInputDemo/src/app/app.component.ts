import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Input Demo';

  messageList : string[] = ["Hi...!","Hello...!","How Are you?","Good Night :)"];

  person : Person = new Person();

  personList : Person[] = [
    {
      name : 'keyur',
      city : 'surat',
      mobileNo : '7387029671',
      email : 'keyurjava27@gmail.com',
      age : 32,
      gender : 'Male'
    },
    {
      name : 'denish',
      city : 'surat',
      mobileNo : '7387029111',
      email : 'denishjava27@gmail.com',
      age : 33,
      gender : 'Male'
    },
    {
      name : 'Ami',
      city : 'pne',
      mobileNo : '7387029222',
      email : 'amijava27@gmail.com',
      age : 30,
      gender : 'FeMale'
    }
  ];

  search(str) : void{
     this.person = this.personList.find(p=>p.name === str);           
  }

}
