import { Component, HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple.animation';
import { ON_OFF_ANIMATION } from './animations/on-off.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-trigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    STATE_ANIMATION,
    ON_OFF_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AppComponent {
  title = 'AnimationDemo';

  state : string = 'start';

  studentNames : string[] = ["keyur","denish","vinit","ravi","sandip","Dharmesh"]; 

  tableState : string = 'off';

  @HostBinding('@roundAntiClockTrigger') 
  roundAntiClockTrigger = 'in'; 
  @HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute';

  toggleState():void{
    this.state = this.state == 'start' ? 'stop' : 'start';
  }

  changeTableState() : void {
    this.tableState = this.tableState === 'on' ? 'off' : 'on';
  }

}
