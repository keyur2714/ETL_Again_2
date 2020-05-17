import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './user-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  appUrl : string = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.appUrl+"/users");
  }

  save(user : UserModel) : Observable<UserModel>{
    return this.httpClient.post<UserModel>(this.appUrl+"/users",user);
  }
}
