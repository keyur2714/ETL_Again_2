import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Student } from './student.model';
import { Batch } from './batch.model';

@Component({
  selector: 'app-batch-entry',
  templateUrl: './batch-entry.component.html',
  styleUrls: ['./batch-entry.component.css']
})
export class BatchEntryComponent implements OnInit {

  batchEntryForm : FormGroup;
  newBatch : Batch = new Batch();

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createBatchEntryForm();
  }

  createBatchEntryForm() : void {
    this.batchEntryForm = this.formBuilder.group(
      {
        id : ['',Validators.required],
        batchName : ['',Validators.required],
        courseName : [''],
        students : this.formBuilder.array([this.formBuilder.group(new Student('','','',''))])
      }
    )
  }

  addNewStudent() : void{
    let newStudent = new Student('','','','');
    (<FormArray>this.batchEntryForm.get('students')).push(this.formBuilder.group(newStudent));
  }

  save():void{
    console.log(this.batchEntryForm.value);
    console.log("========");
    if(this.batchEntryForm.valid){
      this.newBatch = this.batchEntryForm.value;
      console.log(this.newBatch);
    }
  }
}
