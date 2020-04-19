import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../auth/user.model';
import { Batch } from '../admin/batch-list/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  appUrl : string = 'http://localhost:3000/batches';

  constructor(private httpClient : HttpClient) { }

  getBatchList() : Observable<Batch[]> {
    let user : User = JSON.parse(sessionStorage.getItem("loggedInUser"));
    //return this.httpClient.get<Batch[]>(this.appUrl,{'headers':{'authentication':'Berear '+user.token}});
    return this.httpClient.get<Batch[]>(this.appUrl);
  }

  save(batch : Batch) : Observable<Batch> {    
    return this.httpClient.post<Batch>(this.appUrl,batch);   
  }

  update(batch : Batch) : Observable<Batch>{
    return this.httpClient.put<Batch>(this.appUrl+"/"+batch.id,batch);
  }

  getBatchById(id  :number) : Observable<Batch>{
    return this.httpClient.get<Batch>(this.appUrl+"/"+id);
  }

  delete(id : number) : Observable<void>{
    return this.httpClient.delete<void>(this.appUrl+"/"+id);
  }
}
