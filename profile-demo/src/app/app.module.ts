import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { SkillSetsComponent } from './skill-sets/skill-sets.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    EducationInfoComponent,
    SkillSetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
