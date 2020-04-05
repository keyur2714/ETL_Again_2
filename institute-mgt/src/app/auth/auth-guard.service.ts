import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private authenticationService : AuthenticationService , private router : Router){}

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        //alert(this.authenticationService.isLoggedIn + state.url);
        if(this.authenticationService.isLoggedIn){
            return true;
        }
        this.authenticationService.loginSuccessPage = state.url;
        this.router.navigate(['signin']);
        return false;
    }      
}