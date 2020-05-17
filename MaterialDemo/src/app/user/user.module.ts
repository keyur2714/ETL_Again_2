import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserEntryComponent } from './user-entry/user-entry.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    declarations : [
        UserComponent,
        UserEntryComponent
    ],
    imports :[
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,                
        MatSortModule,
        MatPaginatorModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,        
        MatRadioModule,
        MatCardModule        
    ],
    providers :[

    ]    
})
export class UserModule{
    constructor(){
        console.log("User Module Loaded...!")
    }
}