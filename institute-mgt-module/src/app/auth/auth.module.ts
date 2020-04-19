import { NgModule } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations : [
    LoginComponent,
    LogoutComponent
  ],
  imports :[
    CommonModule,
    ReactiveFormsModule,    
    AuthRoutingModule
  ],
  providers :[

  ]    
})
export class AuthModule {
    constructor(private loggingService : LoggingService){
        this.loggingService.logInfo("Auth Module Loaded...");
    }
}