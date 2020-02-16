import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StringUtilComponent } from '../string-util.component';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  result : string = '';

  @ViewChild("str",{static : true})
  elementRef : ElementRef;

  @ViewChild("res",{static : false})
  res : ElementRef;

  @ViewChild(StringUtilComponent,{static : false})
  stringUtilComponent : StringUtilComponent;

  constructor() {     
  }

  ngOnInit() {
    //alert(this.elementRef.nativeElement.value);
    this.elementRef.nativeElement.value = 'Radhe Krishna...!';
    this.elementRef.nativeElement.style.background = 'yellow';
  }

  upper() : void {
    //alert(str);
    let str = this.elementRef.nativeElement.value;
    //this.result = str.toUpperCase();
    this.stringUtilComponent.result = this.stringUtilComponent.upper(str);
    this.elementRef.nativeElement.value = '';
    //this.res.nativeElement.innerHTML = 'Result Is : '+this.result;    
    this.res.nativeElement.style.background = 'yellow';
    this.res.nativeElement.style.color = 'blue';
  }

  lower() : void {
    let str = this.elementRef.nativeElement.value;
    this.stringUtilComponent.result = this.stringUtilComponent.lower(str);
    this.elementRef.nativeElement.value = '';
    this.res.nativeElement.style.background = 'yellow';
    this.res.nativeElement.style.color = 'blue';
  }

  reverse() : void {
    let str = this.elementRef.nativeElement.value;
    this.stringUtilComponent.result = this.stringUtilComponent.reverse(str);
    this.elementRef.nativeElement.value = '';
    this.res.nativeElement.style.background = 'yellow';
    this.res.nativeElement.style.color = 'blue';
  }

  checkPalindrom() : void {
    let str = this.elementRef.nativeElement.value;
    this.stringUtilComponent.result = this.stringUtilComponent.isPaindrom(str);
    this.elementRef.nativeElement.value = '';
    this.res.nativeElement.style.background = 'yellow';
    this.res.nativeElement.style.color = 'blue';
  }
}
