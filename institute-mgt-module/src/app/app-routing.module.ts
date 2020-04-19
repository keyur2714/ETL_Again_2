import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {path : 'home' , component : HomeComponent, canActivate : [AuthGuardService]},
  {path : 'aboutus' , component : AboutusComponent},  
  {path : 'contact-us', component : ContactusComponent}  
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
