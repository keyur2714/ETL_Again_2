import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService{

    isLoggedIn : boolean = false;
    loginSuccessPage : string = 'home';

    appUrl : string = 'http://localhost:3000/users';
    constructor(private httpClient:HttpClient){}

    authenticate(username ?: string,password ?: string):Observable<User>{
        return this.httpClient.get<User>(this.appUrl+"?username="+username+"&password="+password).pipe(
            map(users=>users[0])
        );
    }
}