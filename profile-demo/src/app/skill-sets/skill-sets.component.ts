import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill-sets',
  templateUrl: './skill-sets.component.html',
  styleUrls: ['./skill-sets.component.css']
})
export class SkillSetsComponent implements OnInit {

  skills : Skill[] = [];

  constructor() { }

  ngOnInit() {
    let skill1 : Skill= new Skill('Databases',["MySql","Sql Server","Oracle"]);
    let skill2 : Skill= new Skill();
    skill2.skillName = 'Languages';
    skill2.skills = ['C','C++','Java','Type Script'];
    let skill3 : Skill = new Skill('Tools',['VS Code','Eclipse','PyCharm']);
    let skill4 : Skill = new Skill("OS",["Windows","Linux","Ubantu"]);
     this.skills.push(skill1);
     this.skills.push(skill2);
     this.skills.push(skill3);
     this.skills.push(skill4);    
    //this.skills = [skill1,skill2,skill3,skill4];
  }
}
