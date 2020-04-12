import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn = false;
    this.authenticationService.loginSuccessPage = 'home';
    sessionStorage.removeItem("loggedInUser");    
    this.router.navigate(['signin']);
  }

}
