import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../customers.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-cus-tem',
  templateUrl: './create-cus-tem.component.html',
  styleUrls: ['./create-cus-tem.component.css'],
  providers:[NgbActiveModal]
})
export class CreateCusTemComponent implements OnInit, OnChanges {

  constructor(public activeModal: NgbActiveModal, 
    private http?: HttpClient, private modalService?: NgbModal,
    public customerservice?: CustomersService) { }

  customerForm: FormGroup;
  @Input() cusomerModalclose;
  @Input() dis;
  @Input() customerModaldismiss;

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      "CustomerID": new FormControl(),
      "CompanyName": new FormControl(),
      "ContactName": new FormControl(),
      "ContactTitle": new FormControl(),
      "Address": new FormControl(),
      "City": new FormControl(),
      "Region": new FormControl(),
      "PostalCode": new FormControl(),
      "Country": new FormControl(),
      "Phone": new FormControl(),
      "Fax": new FormControl()
    });
  }

  ngOnChanges(simplechanges: SimpleChanges) {
    console.log(simplechanges);
    //debugger;
  }



}
