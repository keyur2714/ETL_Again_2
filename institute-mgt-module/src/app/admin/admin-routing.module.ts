import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchEntryComponent } from './batch-entry/batch-entry.component';
import { LoggingService } from '../services/logging.service';
const routes : Routes = [
     {
        path : 'admin' , component : AdminComponent, canActivate : [AuthGuardService],
        canActivateChild : [AuthGuardService],
        children : [
          {path : 'batchList', component : BatchListComponent},    
          {path : 'batchAdd',component : BatchEntryComponent},
          {path : 'batchEdit/:id',component : BatchEntryComponent}
        ]
      }
]
@NgModule({
    imports : [
      RouterModule.forChild(routes)      
    ],
    exports : [RouterModule],
    providers :[
      AuthGuardService
    ]
})
export class AdminRoutingModule{
  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("Admin Routing Module Loaded ");
  }

}