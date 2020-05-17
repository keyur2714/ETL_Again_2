import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
const routes : Routes = [
    {path : 'user' , component : UserComponent},
    {path : 'userEntry' , component : UserEntryComponent}
]
@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports :[
        RouterModule
    ]
})
export class UserRoutingModule{
    constructor(){
        console.log("User Routing Modle Loaded...!");
    }
}