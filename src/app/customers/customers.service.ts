import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { ICustomer } from '../customer';
import { observable, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
//import {Customer} from 'src/app/cu'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  APIURL: string = "https://localhost:44309/api/customers";
  @Output() oCloseModel = new EventEmitter();
  CloseModal(type) {
    this.oCloseModel.emit(type);
  }
  constructor(private http: HttpClient) { }



  CustomerObservable = new Observable();

  CustomerSuccessEmitter = new EventEmitter();
  httpHeaders = new HttpHeaders({ "Technology": "Angular" });

  httpParams = new HttpParams().set("userToken", "afaufawpieubipqawfio");

  GetCustomers() {
    //throw "what";
    //this.httpHeaders = this.httpHeaders.append("anothercustomer", "madan");
    //this.httpParams = this.httpParams.append("param1", "123");
    this.CustomerObservable = this.http.get<ICustomer>(this.APIURL, {
      // headers: this.httpHeaders,
      // params: this.httpParams,
      // responseType: 'json',
      // observe: 'events',
    })
      .pipe(map((data: any) => {
        return data;
        // if (event.type === HttpEventType.Sent) {
        //   console.log("You are sending the request ", event.body);
        // }
        // if (event.type === HttpEventType.Response) {
        //   console.log("You are getting response ", event.body);
        // }
      }));
    return this.CustomerObservable;
    // .pipe(map(param => {
    //   console.log(param);
    // }));
    //return this.CustomerObservable.pipe(map
    // }).subscribe((record:HttpResponse<any>) => {
    //   console.log("record is " , record.body.data);
    // })
  }

  CreateCustomer(Customer: ICustomer) {
    //Incase if you want to pass object contains different values then api should be dynamic..
    return this.http.post(this.APIURL + "/NewCustomer", Customer);
  }

  ModelPopupEmitter = new EventEmitter<any>();
  OpenModelPopUpByID(record, status) {
    this.ModelPopupEmitter.emit({ record, status });
  }

  DeleteCustomer(CustomerID) {
    const API = this.APIURL + "/'" + CustomerID.trim() + "'";
    return this.http.delete(API);
  }

  //xmlobj = "<?xml version= 1.0 ?> <employee> <id>1</id> </employee> '";
  //'application-xml'

  DCustomer = {
    "xyz": "123"
  }


  UpdateCustomer(Customer: ICustomer) {
    const array1 = [];
    array1.push(Customer);
    return this.http.put(this.APIURL + "/'" + Customer.CustomerID.trim() + "'", array1);
  }



}
