import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import {  } from 'protractor';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  @Input('Name') LName ='';
  @Output('EmployeeClick') LEClick = new EventEmitter<any>();

  btnDetails = ()=>{
    this.LEClick.emit([{ID:1 , Name : 'Madan'}]);
  }

  // LEClick = (result)=>{
  // console.log(result);
  // }

  ngOnInit(): void {
    console.log(this.LName);
    //this.LEClick.emit([{ID:1 , Name : 'Madan'}]);
    //console.log("this.FromEmpoyee);
    // this.LEClick.subscribe(x=>{
    //   console.log([{ID:1}]);
    // })
  }

}
