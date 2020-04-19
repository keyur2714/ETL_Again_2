import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingService } from './services/logging.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthenticationService } from './auth/authentication.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoggingInterceptor } from './services/logging-interceptor.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    AboutusComponent,
    ContactusComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    AuthModule,    
    AppRoutingModule        
  ],
  providers: [
    LoggingService,
    AuthenticationService,
    AuthGuardService,
    {provide : HTTP_INTERCEPTORS , useClass : LoggingInterceptor ,multi : true},
    {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("App Module Loaded..");
  }
}
