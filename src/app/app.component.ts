import { Component } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { concatAll, concatMap, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { CustomerService } from './Services/customer.service';
import { EmployeeService } from './Services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJSM';

  constructor(public _customerService: CustomerService, public _Emp: EmployeeService) {
    //this._customerService.getEmployees();
    //this.getRawData();
    this._Emp.getEmployees();
  }

  getRawData() {

    const obj = from(
      [{ key: "Ban", value: "Bangolore" },
      { key: "che", value: "chennai" },
      { key: "hyd", value: "hyderabad" },
      { key: "trd", value: "trivendram" }]);
    //obj.subscribe((x) => console.log(x));
    //console.log(obj);
    // const recordsY = obj.
    //   pipe(map(x => { 
    //     x["New"] = "New";
    //     x["NewK"] = "Base"
    //     return x;
    //   }));
    // recordsY.subscribe((x: any) => console.log(x));
    // console.log(obj);

    // const recordsY = obj.
    //   pipe(map((x) => { console.log("switch " , x); return of(x) }),concatAll())
    //   .subscribe((y) => console.log("subscribed " , y));


    //   pipe(map((x) => {
    //       console.log(x);
    //     return of([{ key: "Rpatakota", value: "madan" }, { key: "Rmohan", value: "reddy" }]);
    //   }
    //   )).subscribe((obj) => { console.log("subscribed",obj) });




    // const records = [{ key: "patakota", value: "madan" }, { key: "mohan", value: "reddy" }];
    // records.map(x => x["key1"] = "K");
    // console.log(records);

  }
}
