import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchEntryComponent } from './batch-entry/batch-entry.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {path : 'home' , component : HomeComponent, canActivate : [AuthGuardService]},
  {path : 'aboutus' , component : AboutusComponent},
  {
    path : 'admin' , component : AdminComponent, canActivate : [AuthGuardService],
    canActivateChild : [AuthGuardService],
    children : [
      {path : 'batchList', component : BatchListComponent},    
      {path : 'batchAdd',component : BatchEntryComponent},
      {path : 'batchEdit/:id',component : BatchEntryComponent}
    ]
  },  
  {path : 'contact-us', component : ContactusComponent},
  {path : 'signin', component : LoginComponent},
  {path : 'signout', component : LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("AppRouting Module Loaded...!");
  }
}
