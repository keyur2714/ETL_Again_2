import { Component } from '@angular/core';

@Component({
    selector : 'app-string-util',
    template : `<ng-content></ng-content> {{result}}`,
    styles : []
})
export class StringUtilComponent{
    result : string = '';

    constructor(){
        console.log("String Util Component Object Created...!");
    }

    upper(str : string) : string{
        return str.toUpperCase();
    }

    lower(str : string) : string{
        return str.toLowerCase();
    }

    reverse(str : string) : string{
        let rev = str.split('').reverse().join('');
        //alert(rev);
        return rev;
    }

    isPaindrom(str : string) : string {
        if(str === this.reverse(str)){
            return str+" is a palindrom string";
        }else{
            return str+" is not a palindrom string";
        }
    }
}
