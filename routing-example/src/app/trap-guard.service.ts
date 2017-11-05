import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TrapRouteComponent } from './trap-route/trap-route.component';

@Injectable()
export class TrapGuardService implements CanDeactivate<TrapRouteComponent> {


    canDeactivate(component: TrapRouteComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (component.word === 'super secret') {
            return true;
        }

        alert('Hahaaa, you are trapped poor soul!');
        return false;
    }


    constructor() {
    }

}
