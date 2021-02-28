import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CreateCusTemComponent } from './customers/create-cus-tem/create-cus-tem.component';
import { GetCustomersComponent } from './customers/get-customers/get-customers.component';
//import { GlobalExceptionHandlerService } from './global-exception-handler.service';


import { Router, RouterModule, Routes } from '@angular/router';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { GlobalExceptionHandlerService } from './global-exception-handler.service';
import { HttpInterceptorsInterceptor } from './http-interceptors.interceptor';
//import { GlobalExceptionHandlerService } from './global-exception-handler.service';

const appRouters: Routes = [
  { path: 'customer', component: CustomersComponent },
  { path: 'error', component: GlobalErrorComponent },
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LoginComponent,
    SignUpComponent,
    CreateCustomerComponent,
    CreateCusTemComponent,
    GetCustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouters)
  ],

  providers: [
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalExceptionHandlerService
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorsInterceptor,
      multi : true // All http client calls
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
