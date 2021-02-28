import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionHandlerService implements ErrorHandler {

  constructor(private router: Router , private injector : Injector , private ngZone:NgZone) { }


  handleError(error: any) {
    const routerLInk = this.injector.get(Router);
    console.log("error is getting", error);
    //this.router.navigate(['/error']);
    this.ngZone.run(()=>this.router.navigate(['/error']));
    //if (error instanceof HttpErrorResponse) {
    //  console.log("Reponse is ", error);
    //}
    //throw error;
  }

}
