import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirective } from './directives/my-directive';
import { MyStyleDirective } from './my-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirective,
    MyStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
