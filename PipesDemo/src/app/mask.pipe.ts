import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  constructor(){
    console.log("MaskPipe Object Created...!");
  }

  transform(value: string,noOfChar : number,maskChar : string): any {
    let newValue = '';
    let totalMaskChar = value.length-noOfChar;
    for(let i=1;i<=totalMaskChar;i++){
      newValue = newValue + maskChar;
    }
    newValue = newValue + value.substring(totalMaskChar);
    return newValue;
  }

}
