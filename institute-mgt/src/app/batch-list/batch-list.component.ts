import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { BatchService } from '../services/batch.service';
import { Batch } from './batch.model';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  batchList : Batch[] = [];
  
  constructor(private loggingService : LoggingService,private batchService : BatchService) { }

  ngOnInit() {
    this.loggingService.logInfo("Batch List Component Object Created...!");
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

}
