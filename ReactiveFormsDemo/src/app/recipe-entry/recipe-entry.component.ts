import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-entry',
  templateUrl: './recipe-entry.component.html',
  styleUrls: ['./recipe-entry.component.css']
})
export class RecipeEntryComponent implements OnInit {

  recipeEntryForm : FormGroup;
  isSubmitted : boolean = false;
  newRecipe : Recipe = new Recipe();

  constructor() { }

  ngOnInit() {
    this.createEntryForm();
  }

  createEntryForm():void{
    this.recipeEntryForm = new FormGroup({
      name : new FormControl('',Validators.required),
      cuisine : new FormControl('GUJ'),
      ingredients : new FormArray([new FormControl('')])
    })
  }

  save():void{
    console.log(this.recipeEntryForm.controls['name'].value);
    console.log(this.recipeEntryForm.value);
    if(this.recipeEntryForm.valid){
      this.isSubmitted = true;
      this.newRecipe = this.recipeEntryForm.value;
    }
  }

  add() : void {
    let newControl = new FormControl('');
    (<FormArray>this.recipeEntryForm.get('ingredients')).push(newControl);
  }
}
