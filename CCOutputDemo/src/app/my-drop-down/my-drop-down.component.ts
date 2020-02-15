import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lookup } from '../lookup.model';

@Component({
  selector: 'app-my-drop-down',
  templateUrl: './my-drop-down.component.html',
  styleUrls: ['./my-drop-down.component.css']
})
export class MyDropDownComponent implements OnInit {

  @Input()
  name : string = '';

  @Input()
  dataList : Lookup[] = [];

  @Input()
  selectedItem : Lookup = new Lookup();

  @Output()
  getSelectedItem = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedItem() : void{
    //alert(this.selectedItem.desc);
    this.getSelectedItem.emit(this.selectedItem);
  }
}
