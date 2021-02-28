import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class HttpInterceptorsInterceptor implements HttpInterceptor {

  constructor(private router: Router, private injector: Injector) { }

  handleError(error : HttpErrorResponse) {
    //const routerLInk = this.injector.get(Router);
    console.log("error has changed", error);
    //this.activemodel.close();
    return this.router.navigate(['/error'], {queryParams : {Message : error.message}});
    //this.ngZone.run(() => this.router.navigate(['/error']));
    //if (error instanceof HttpErrorResponse) {
    //  console.log("Reponse is ", error);
    //}
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {

    let requestHeaders = request.headers;
    let requestParams = request.params;
    //request.
    requestHeaders = requestHeaders.append("userToken", "adasjfqhwhqwa");
    requestHeaders = requestHeaders.append("content-type", "application/json");
    requestParams = request.params.append("CustomerID", "Mad123");

    const requestClone = request.clone({
      headers: requestHeaders,
      params: requestParams,
      responseType: 'json'
    });
    //return next.handle(requestClone);

    const request1 = next.handle(requestClone);
    return request1.pipe(
      catchError(errorresponse => {
        return this.handleError(errorresponse);
      }));

    // return next.handle(requestClone).subscribe(
    //   {
    //     next(x) { console.log(x) },
    //     error(HttpErrorResponse) {
    //       this?.handleError(HttpErrorResponse);
    //     }
    //   }
    // );
  }
}
