import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class AppInterceptor implements HttpInterceptor {

    // constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         const currentUser = JSON.parse(localStorage.getItem('currentUser'));
         const tokn = currentUser.token;
        if (currentUser != null) {
            const updatedRequest = req.clone({ setHeaders: {'Authorization': tokn}});
            return next.handle(updatedRequest);
        } else {
             return next.handle(req);
        }
    }
}
