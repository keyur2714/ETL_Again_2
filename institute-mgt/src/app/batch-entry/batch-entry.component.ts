import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BatchService } from '../services/batch.service';
import { Batch } from '../batch-list/batch.model';

@Component({
  selector: 'app-batch-entry',
  templateUrl: './batch-entry.component.html',
  styleUrls: ['./batch-entry.component.css']
})
export class BatchEntryComponent implements OnInit {

  @Input()
  batchId : number = 0;
  @Input() action : string = 'save';

  @Output() isSaved =new EventEmitter<boolean>(); 
  batchEntryForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private batchService : BatchService) { }

  ngOnInit() {
    this.createBatchEntryForm();       
  }

  createBatchEntryForm():void{
    this.batchEntryForm = this.formBuilder.group(
      {
        id : ['',Validators.required],
        batchName : ['',[Validators.required]],
        courseName : ['',[Validators.required,this.invalidName.bind(this)]],
        fees : [0,Validators.required]
      }
    )
  }

  setBatchEntryFormValues(){
    alert(this.batchId);
    this.batchService.getBatchById(this.batchId).subscribe(
      (data : Batch)=>{
        this.batchEntryForm.setValue(data);
      }
    )
  }

  save():void{
    //console.log(this.batchEntryForm.value);
    if(this.batchEntryForm.valid){
      let batch : Batch= this.batchEntryForm.value;
      if(this.action === 'save'){        
        this.batchService.save(batch).subscribe(
        (data : Batch)=>{
          alert("Batch Created with Id : "+data.id);
          this.isSaved.emit(true);
          }
        )
      }else{
        this.batchService.update(batch).subscribe(
        (data : Batch)=>{
          alert("Batch Updated with Id : "+data.id);
          this.isSaved.emit(true);
          this.action = 'save';
          this.batchId = 0;
          this.batchEntryForm.setValue({
            id : '',
            batchName : '',
            courseName : '-1',
            fees : 0
          });
          }
        )
      }      
    }
  }

  invalidName(control : FormControl) : any {
    //alert(control.value);
    if(control.value === "-1"){
      return {"invalidName":"Invalid Course Name"};
    }
    return null;
  }
}
