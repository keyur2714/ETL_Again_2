import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  @Input()
  color : string = 'dark'
  @Input("text-color")
  txtColor : string = 'info';

  @Input()
  schoolName : string = 'DAV School';
  @Input("address")
  schoolAddress : string = 'Aundh - Pune';

  @Input()
  rollNo : string = '';
  @Input("studentName")
  name : string = '';


  constructor() { }

  ngOnInit() {
  }

}
