import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { BatchService } from '../../services/batch.service';
import { Batch } from './batch.model';
import { BatchEntryComponent } from '../batch-entry/batch-entry.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  batchList : Batch[] = [];
  action : string = 'save';
  batchId : number = 0;

  batch : Batch = new Batch();

  @ViewChild(BatchEntryComponent,{static : false})
  batchEntryComponent : BatchEntryComponent;

  constructor(private loggingService : LoggingService,private batchService : BatchService,private location: Location,private router:Router) { }

  ngOnInit() {
    this.loggingService.logInfo("Batch List Component Object Created...!");
    this.getBatchList();
  }

  getBatchList() : void {
    this.batchService.getBatchList().subscribe(
      (data)=>{
        console.log(data);
        this.batchList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  // edit(id : number) : void {    
  //   this.batchEntryComponent.action = 'Edit';
  //   this.batchEntryComponent.batchId = id;
  //   this.batchEntryComponent.setBatchEntryFormValues();
  // }

  edit(batchId : number) : void {    
    this.router.navigate(['admin/batchEdit',batchId]);  
  }

  add() : void {
    this.router.navigate(['admin/batchAdd']);  
  }

  delete(id : number) : void{
    let confirmMsg = confirm("Are you sure want to delete batch with id : "+id);
    if(confirmMsg){
      this.batchService.delete(id).subscribe(
        (data)=>{
          alert("Batch Deleted with id : "+id);
          this.getBatchList();
        }
      )   
    }
  }

  refreshData(flag : boolean) : void{
    if(flag){
      this.getBatchList();
    }
  }
  
  back() : void{
    this.location.back();
  }
}
