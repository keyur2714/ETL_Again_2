import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {

  userEntryForm = this.formBuilder.group({
    id : [null,Validators.required],
    username : [null,Validators.required],
    password : [null,Validators.required],
    email : [null,[Validators.required,Validators.email]],
    mobileNo : [null,Validators.required],    
    age : null,
    gender : null
  });

  constructor(private formBuilder : FormBuilder,private userServive : UserService,private router : Router) { }

  ngOnInit() {
  }

  onSubmit() : void{
    if(this.userEntryForm.valid){
      let user  = this.userEntryForm.value;
      this.userServive.save(user).subscribe(
        (data)=>{
          alert("User Created with Id "+data.id);          
          this.router.navigate(['user']);
        }
      )
    }
  }
}
