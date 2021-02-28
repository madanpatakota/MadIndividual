import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  @Input('FromEmpoyee') FromEmpoyee: any;

  items = [{ ID: 1, Name: 'Customer' }, { ID: 2, Name: 'Employee' }, { ID: 3, Name: 'Supplier' }]

  
  TestControl =  {};

  fgroup:FormGroup;
  //@Input('FromEmpoyee') FromEmpoyee : any;
  constructor() {


  }

  ngOnInit(): void {
    const SelectedItem = new FormControl(null);
    this.fgroup = new FormGroup({
       'SelectedItem' : SelectedItem
    })
    console.log("Custoemr is", this.FromEmpoyee);
  }

  employeeID:number;
  changeItems(fgroup){
    this.employeeID = this.fgroup.controls['SelectedItem'].value;
    console.log(this.fgroup);
    console.log(fgroup);
  }

}
