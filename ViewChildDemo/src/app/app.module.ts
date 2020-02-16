import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringOperationComponent } from './string-operation/string-operation.component';
import { StringUtilComponent } from './string-util.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOperationComponent,
    StringUtilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
