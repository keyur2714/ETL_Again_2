import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {

  educationList = [
    {
    year : 2002,
    degree : 'S.S.C',
    per : 72.14,
    uni : 'GSEB'
   },
   {
    year : 2004,
    degree : 'H.S.C',
    per : 66.50,
    uni : 'HSEB' 
   },
   {
    year : 2008,
    degree : 'B-Tech',
    per : 85.50,
    uni : 'S.P.U' 
   }
];

  constructor() { }

  ngOnInit() {
  }

}
