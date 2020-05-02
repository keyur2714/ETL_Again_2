import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'welcome',
    pure : true
})
export class WelcomePipe implements PipeTransform{
    
    constructor(){
        console.log("Welcome Pipe Object Created,,,")
    }

    transform(value: string) {
        let newValue = 'Welcome '+value;
        return newValue;
    }

}