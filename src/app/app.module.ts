import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { EmployeeComponent } from './emp/employee.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { StringDemosComponent } from './string-demos/string-demos.component';

@NgModule({
  declarations: [
    AppComponent,
   // EmployeeComponent,
    SupplierComponent,
    CustomerComponent,
    EmployeeComponent,
    StringDemosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
