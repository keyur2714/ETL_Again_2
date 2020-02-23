import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoopDirective } from './loop.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoopDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
