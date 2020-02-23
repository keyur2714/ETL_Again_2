import { Directive , TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective {

  //set method must have selector name in starting or prifix.

  maxIdx : number = 10;
  loopCounter : number = 1;

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { }

  @Input() set appLoop(loopCounter : number){
    this.loopCounter = loopCounter;
    alert(this.maxIdx);    
    for(let i=1;i<=this.loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  } 

  @Input("appLoopMaxIndex") set maxIndex(idx : number){
    this.maxIdx = idx;
    alert(this.maxIdx);    
  }

}
