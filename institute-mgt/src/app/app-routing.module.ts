import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchEntryComponent } from './batch-entry/batch-entry.component';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'admin' , component : AdminComponent},
  {path : 'batchList', component : BatchListComponent},
  {path : 'batchEdit/:id',component : BatchEntryComponent},
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
