import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector : '[app-mydir]'
})
export class MyDirective implements AfterViewInit{
    constructor(public elementRef : ElementRef){
        console.log("MyDirective : Object Created...!");
    }

    ngAfterViewInit(){
        console.log(this.elementRef);
        this.elementRef.nativeElement.style.color = 'orange';
        this.elementRef.nativeElement.style.fontSize = '35px';
    }
}