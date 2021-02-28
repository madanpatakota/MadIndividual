import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import { Observable, of, from } from 'rxjs';
import { ICustomer } from '../Interfaces/icustomer';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http'
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(public _http: HttpClient) {
    //this.getEmployees().subscribe((val) => console.log(val));
  }

  getEmployees() {
    // this._http.get("https://localhost:44309/api/customers").
    //   subscribe(res => {
    //     console.log(res)
    //   }, error => {
    //     console.log(error);
    //   }
    //   );

    let x = [1, 2, 3, 4];
    this._http.get("https://localhost:44309/api/customers").
      pipe(
        map
          (
            (x: any) =>
              x ))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
