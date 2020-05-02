import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  constructor(){
    console.log("Status Pipe Object Created...!");
  }

  transform(value: any): any {
    let newValue = '';
    if(value === 'A')
      newValue = 'success';
    else if(value === 'D')
      newValue = 'danger';
    else if(value === 'P')
      newValue = 'primary';  
    else if(value === 'F')
      newValue = 'warning';    
    return newValue;
  }

}
