import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap, finalize } from 'rxjs/operators';
import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor{
    
    constructor(private loggingService : LoggingService){}

    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        const startTime = Date.now();
        let status: string;
        console.log("Inside Interceptor...");        
        return next.handle(req).pipe(
            tap(
                data=>{
                    status = '';
                    if(data instanceof HttpResponse){
                       status = 'success';     
                    }
                },
                error=>{
                    status = 'failed';
                }
            ),
            finalize(()=>{
                const elapsedTime = Date.now() - startTime;
                const message = req.method + " " + req.urlWithParams +" "+ status 
                    + " in " + elapsedTime + "ms";
                this.loggingService.logInfo(message);
            })
        );
    }
    
    
}