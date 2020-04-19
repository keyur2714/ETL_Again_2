import { NgModule } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchEntryComponent } from './batch-entry/batch-entry.component';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { BatchService } from '../services/batch.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
    declarations : [
        AdminComponent,
        BatchListComponent,
        BatchEntryComponent
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,        
        AdminRoutingModule
    ],
    providers : [    
        BatchService        
    ]
})
export class AdminModule {
    constructor(private loggingService : LoggingService){
        this.loggingService.logInfo("Admin Module Loaded....!");
    }
}