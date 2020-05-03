import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
const routes : Routes = [
    {
        path : 'admin' , component : AdminComponent,        
    },
    {
        path : 'item-entry' , component : ItemEntryComponent
    }
]
@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})
export class AdminRoutingModule{
    constructor(){
        console.log("Admin Routing Module Loaded...!");
    }
}