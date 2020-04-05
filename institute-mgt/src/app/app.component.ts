import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'institute-mgt';
  isLoggedIn : boolean = false;
  constructor(private loggingService : LoggingService,private authenticationService : AuthenticationService){}

  ngOnInit(){
    this.loggingService.logInfo("App Component Inititalized....!");
  }

  checkIsLoggedIn() : void {
    this.isLoggedIn = this.authenticationService.isLoggedIn;
  }
}
