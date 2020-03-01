import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from './course.model';
import { Inquiry } from './inquiry.model';

@Component({
  selector: 'app-inquiry-enry',
  templateUrl: './inquiry-enry.component.html',
  styleUrls: ['./inquiry-enry.component.css']
})
export class InquiryEnryComponent implements OnInit {

  inquiry : Inquiry = new Inquiry();
  courseList : Course[] = [];
  isSubmitted : boolean = false;

  constructor() { }

  ngOnInit() {
    let course1 = new Course(1,'ANG','Angular',12000);
    let course2 = new Course(2,'PYT','Python',8000);
    let course3 = new Course(3,'JAV','Java',10000);
    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);
    this.inquiry.course = this.courseList[1];
    this.inquiry.gender = 'M';
  }

  save(frm : NgForm) : void{
    console.log(frm);
    if(frm.valid){
      this.isSubmitted = true;
      console.log(this.inquiry.id+" "+this.inquiry.name+" "+this.inquiry.mobileNo+" "+this.inquiry.email+" "+this.inquiry.course.name+" "+this.inquiry.gender);
      console.log(frm.value);
      console.log(frm.controls['id'].value);
      console.log(frm.controls['name'].value);
      console.log(frm.controls['mobileNo'].value);
      console.log(frm.controls['email'].value);
      console.log(frm.controls['course'].value);

    }
  }
}
