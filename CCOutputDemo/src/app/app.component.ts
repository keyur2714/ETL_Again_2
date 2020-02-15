import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCOutputDemo';
  newMsg : string = '';

  getNewMsg(msg) : void{
    //alert(msg);
    console.log(2);
    this.newMsg = msg;
  }
}
