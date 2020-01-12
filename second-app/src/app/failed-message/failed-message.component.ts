import { Component } from '@angular/core';

@Component({
    selector : 'app-failed-msg',
    template : '<h1>{{failedMessage}}</h1>',
    styles : ['h1{color : blue;border:5px solid red;}']
})
export class FailedMessageComponent{
    failedMessage : string = "Sorry but it's failed.";    
}