import { Injectable }  from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot} from '@angular/router';

import { AuthService }      from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate {


    constructor(
        private authService: AuthService,
        private router: Router
    ){}

//这个ActivatedRouteSnapshot包含了即将被激活的路由，而RouterStateSnapshot包含了该应用即将到达的状态。 它们要通过我们的守卫进行检查。
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        console.log('AuthGuard#canActivate called');

        let url:string = state.url;
        return this.checkLogin(url);
    }


    checkLogin(url:string):boolean {

        if(this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;

        this.router.navigate(['/login']);

        return false;
    }
}