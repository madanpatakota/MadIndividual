import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(public _httpclient: HttpClient) {


  }

  getEmployees() {
    return this._httpclient.get("https://localhost:44309/api/employees").
      pipe(map(x => { console.log(x); x })).subscribe();
  }

}
