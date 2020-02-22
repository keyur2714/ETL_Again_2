import { Component, ViewChild, ElementRef } from '@angular/core';
import { MyStyleDirective } from './my-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';
  bgColor : string = 'yellow';

  @ViewChild("changeColor",{static : false})
  cColor : ElementRef;

  @ViewChild("name",{static : false})
  txtName : ElementRef;

  @ViewChild(MyStyleDirective,{static : false})
  appMyStyleDir : MyStyleDirective;



  changeStyle() : void {
    //alert(this.cColor.nativeElement.value);
    this.appMyStyleDir.color = this.cColor.nativeElement.value;
    this.appMyStyleDir.elementRef = this.txtName;
    this.appMyStyleDir.changeStyle();
  }
}
