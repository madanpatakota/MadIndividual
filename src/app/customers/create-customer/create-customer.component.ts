import { Component, OnInit, ViewChild, NgModuleRef, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { User } from '../../sign-up/user'
import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from '../customers.service';
import { ICustomer } from 'src/app/customer';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit, AfterViewInit {

  //I am using ActivateMoal here for close.
  //Make this is a public then you can access into the .html file of create-customer


  IsCreate = true;
  constructor(public activeModal: NgbActiveModal,
    private toasterservice: ToastrService,
    private http?: HttpClient,
    private modalService?: NgbModal,

    //Is their any values i have to subscribe while page is getting initlize.....
    // Here yes i have to while doing the update....
    public customerservice?: CustomersService) {
    this.customerservice.ModelPopupEmitter.subscribe((params) => {
      const param = params.record;
      this.IsCreate = false;
      this.customerForm.setValue({
        Address: param.Address,
        City: param.City,
        CompanyName: param.CompanyName,
        ContactName: param.ContactName,
        ContactTitle: param.ContactTitle,
        Country: param.Country,
        CustomerID: param.CustomerID,
        Fax: param.Fax,
        Phone: param.Phone,
        PostalCode: param.PostalCode,
        Region: param.Region
      });
      console.log(this.customerForm);
      console.log(param);
      //debugger;
    }, error => {
      console.log("error is ", error);
    })
    console.log("created");
  }

  // //customerForm: FormGroup;
  customerForm: FormGroup = new FormGroup({
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


  //@ViewChild('customertemplate') customertemplate: NgbModalRef;
  modaldismiss() {

  }
  evtInsert(Form) {
    console.log(this.customerForm);
    console.log(Form);
  }

  evtUpdateCustomer(updateCustomer) {
    this.customerservice.UpdateCustomer(updateCustomer.value)
      .subscribe((updateRecord: any) => {
        //this.toasterservice.success(this.Status);
        if (updateCustomer.value?.CustomerID.includes("mad")) {
          this.customerservice.CustomerSuccessEmitter.emit(updateCustomer.value);
          this.Status = updateCustomer.value?.CustomerID + " Update Successfully";
          this.toasterservice.success(this.Status);
          this.activeModal.close();
        }
      },
        (error) => {
          //console.log("from updatecusotmer");
          //this.activeModal.close();
          //throw error;
        },
        () => { console.log("completed") ; this.activeModal.close() });
    // )
  };


  // open(content) {
  //   this.modalService.open(this.customertemplate, {
  //     backdropClass: 'light-blue-backdrop',
  //     windowClass: 'dark-modal',
  //     size: 'lg' //sm , xl,
  //     //centered:true,
  //     //scrollable : true
  //   });
  // }

  @ViewChild('modal', { read: ElementRef }) modal: NgbModalRef;
  
  CloseModal(type?) {
    //this.customerservice.CloseModal(type);
    this.modal.close();
  }

  subscription: Subscription;
  Status = "";


  evtCreateCustomer(customer: FormGroup) {
    console.log(customer);
    const Observable = this.customerservice.CreateCustomer(customer.value);
    this.subscription = Observable.subscribe((record: any) => {
      this.activeModal.close();
      this.Status = record.data + " Create Successfully";
      this.toasterservice.success(this.Status);
      if (customer.value?.CustomerID.includes("mad")) {
        this.customerservice.CustomerSuccessEmitter.emit(customer.value);
      }
    }, (error) => {
      console.log("Error is ", error);
    })
    // this.subscription.unsubscribe();
    //this.activeModal.close();
  }


  ngAfterViewInit() {

  }



  ngOnInit(): void {
    this.customerservice.ModelPopupEmitter.subscribe((param: ICustomer) => {
      // Address:  param.Address;
      // City:  param.City;
      // CompanyName:  param.CompanyName;
      // ContactName:  param.ContactName;
      // ContactTitle:  param.ContactTitle;
      // Country:  param.Country;
      // CustomerID:  param.CustomerID;
      // Fax:  param.Fax;
      // Phone:  param.Phone;
      // PostalCode:  param.PostalCode;
      // Region:  param.Region;
      console.log(this.customerForm);
      console.log(param);
      //debugger;
    })
  }

}
