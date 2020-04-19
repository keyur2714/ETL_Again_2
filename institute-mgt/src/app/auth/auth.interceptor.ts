import { HttpInterceptor, HttpHeaders } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
    
    constructor(){}

    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        let token = sessionStorage.getItem('token');
        if(token){
            alert(token);
            req = req.clone({
                setHeaders : {'Authorization':'Berear '+token}
            }) 
        }
        return next.handle(req);
    }
    
}