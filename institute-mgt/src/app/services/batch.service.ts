import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../batch-list/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private httpClient : HttpClient) { }

  getBatchList() : Observable<Batch[]> {
    return this.httpClient.get<Batch[]>('http://localhost:3000/batches');
  }

}
