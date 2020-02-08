import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  
  @Input() name : string = 'keyur';
  @Input() city : string = 'surat';
  @Input() mobileNo : string = '7387029671';
  @Input()email : string = 'keyurjava27@gmail.com';
  @Input() age : number = 32;
  @Input() gender : string = 'Male';

  constructor() { }

  ngOnInit() {
  }

}
