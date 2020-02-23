import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { }

  @Input("appMyIf") set myIf(flag : boolean){
    //alert(flag);
    if(flag){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }
}
