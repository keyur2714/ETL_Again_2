import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  @Input() color : string = 'orange';
  @Input("bg-color") backGroundColor = 'purple';
  @Input("font-size") fontSize : string = '10px';

  constructor(public elementRef : ElementRef) { 
    console.log("MyStyleDirective : Object Created...!");
  }

  ngAfterViewInit(){
    this.changeStyle();
  }

  changeStyle() {
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.background = this.backGroundColor;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;    
  }

  
}


