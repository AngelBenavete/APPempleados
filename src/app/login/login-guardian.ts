import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private login:LoginService, private route:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(this.login.getIdToken()){
            return true;
        }
        else{
            this.route.navigate(["login"]);
            return false;
        }
    }
}