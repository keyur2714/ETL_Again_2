import { CanActivate, Router, CanActivateChild, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from './user.model';
@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{
    

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
    
    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {        
        let user : User = JSON.parse(sessionStorage.getItem("loggedInUser"));
        //alert(state.url +" " + user.role+" "+childRoute.url);
        let link  = childRoute.url;
        let s : UrlSegment = link[0];
        
        if(user.role === 'USER' && s.toString() == 'batchEdit'){
            alert("Sorry! you do not have permission to Edit...!");
            return false;
        }
        return true;
    }
}