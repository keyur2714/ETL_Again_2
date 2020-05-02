import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';

  name : string = 'Radhe Krishna...!';

  today : Date = new Date();

  person = {
    firstName : 'keyur',
    lastName : 'thakor',
    mobileNo : '7387029671',
    accNo : '9898033112',
    status : 'A'
  };

  person1 = {
    firstName : 'denish',
    lastName : 'patel',
    mobileNo : '7387029112',
    accNo : '9898033322',
    status : 'D'
  };
}
