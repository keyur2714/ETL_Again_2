import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoggingService } from '../services/logging.service';
const routes : Routes = [
    {path : 'signin', component : LoginComponent},
    {path : 'signout', component : LogoutComponent},
];
@NgModule({
    imports : [
        RouterModule.forChild(routes)        
    ],
    exports : [
        RouterModule
    ]
})
export class AuthRoutingModule {
constructor(private loggingService :LoggingService){
this.loggingService.logInfo("Auth Routing Module Loaded");
}
}