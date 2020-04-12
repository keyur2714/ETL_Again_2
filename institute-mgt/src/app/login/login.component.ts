import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() : void {
    this.loginForm = this.formBuilder.group(
      {
        username : ['',Validators.required],
        password : ['',Validators.required]
      }
    )
  }

  login() : void {
    console.log(this.loginForm);
    if(this.loginForm.valid){
      let username = this.loginForm.get('username').value;
      let password = this.loginForm.get('password').value;
      this.authenticationService.authenticate(username,password).subscribe(
        (user : User)=>{
          if(user === undefined){
            alert("Invalid Username or Password");
          }else{
            this.authenticationService.isLoggedIn = true;            
            sessionStorage.setItem("loggedInUser",JSON.stringify(user));
            this.router.navigate([this.authenticationService.loginSuccessPage],{queryParams : {name : user.name,city : 'pune'} });
          }          
        }
      )
    }
  }
}
