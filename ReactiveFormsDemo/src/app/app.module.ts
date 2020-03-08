import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeEntryComponent } from './recipe-entry/recipe-entry.component';
import { BatchEntryComponent } from './batch-entry/batch-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeEntryComponent,
    BatchEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
