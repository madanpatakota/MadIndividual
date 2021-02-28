import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersService } from './customers.service';
import { Subscription, pipe } from 'rxjs';
import { ToastrService } from 'ngx-toastr'

// import { keys } from 'ts-transformer-keys'
//import { Customer } from '../sign-up/user';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [ToastrService]
})
export class CustomersComponent implements OnInit, AfterViewInit, OnDestroy {


  //public CustomersList = [];
  constructor(private ToastrService: ToastrService, private http: HttpClient,
    private customerService: CustomersService, private modalService: NgbModal) {
    // this.subscription = this.customerService.GetCustomers().subscribe((Response: any) => {
    //   Response.data.slice(0, 10).forEach(CustomerRecord => {
    //     console.log("Customers component is ....Executed");
    //     this.CustomersList.push({ ...CustomerRecord });
    //   })
    //   //this.ColumnKeys = Object.getOwnPropertyNames(this.CustomersList[0]);
    // });
  }

  //========================================Taking as a component Starts========================

  openComponent() {
    const modalRef = this.modalService.open(CreateCustomerComponent, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'light-blue-backdrop',
      windowClass: 'dark-modal',
      size: 'lg' //sm , xl,
      //centered:true,
      //scrollable : true
    });
  }
  //========================================Taking as a component Close========================

  //========================================Taking Template  Starts=====================================>
  // @ViewChild('customertemplate', { read: TemplateRef }) customertemplate: NgbModalRef;
  openTemplate(template) {
    this.modalService.open(template);
    //this.modalService.open(this.customertemplate);
  }

  subscription: Subscription;
  CustomersList = [];

  //CustomerKeys = keyof ;
  ColumnKeys = [];
  ngOnInit(): void {
    // you can trigger by output by getting the value of event emitter
    // this.customerService.oCloseModel.subscribe((element) => {
    //   if (element == "Close") {
    //     this.myModal.close();
    //   }
    // })

    //console.log(this.CustomerKeys);

    // this.subscription = this.customerService.GetCustomers().subscribe((Response: any) => {
    //   Response.data.slice(0, 10).forEach(CustomerRecord => {
    //     console.log("Customers component is ....Executed");
    //     this.CustomersList.push({ ...CustomerRecord });
    //   })
    //   //this.ColumnKeys = Object.getOwnPropertyNames(this.CustomersList[0]);
    // });

    //this.ToastrService.success("created successfully");
    //$(".toast").toast();

  }


  ngAfterViewInit() {
  }
  //==========================================Taking Template  Close=====================================>

  //@ViewChild('customerComponent') customerComponent: CreateCustomerComponent;

  closeModelPopUp(modal: NgbModalRef, type?) {
    modal.dismiss();
  }
  // const PostURL = "https://localhost:44309/api/customers/Customer";
  // const PutURL = "https://localhost:44309/api/customers/";
  // const GetURLByID = "https://localhost:44309/api/customers/"
  //const URL1 = "https://localhost:44309/api/customers/TestCustomer";
  //const value = { ID: "1" }
  // this.http.post(URL1, value).subscribe((elem) => {
  //   console.log(elem);
  // })
  // this.http.post(URL, {
  //   "CustomerID": "PMMR",
  //   "CompanyName": "MMR Solutions",
  //   "ContactName": "Madan",
  //   "ContactTitle": "Manager",
  //   "Address": "Karnataka",
  //   "City": "Bengolore",
  //   "Region": "Hindu",
  //   "PostalCode": "560102",
  //   "Country": "India",
  //   "Phone": "7204000000",
  //   "Fax": ""
  // }).subscribe((element) => {

  // });


  // const cust = {
  //   CustomerID: "PMMR1",
  //   CompanyName: "MMRreddy Solutions",
  //   ContactName: "Madan",
  //   ContactTitle: "Manager",
  //   Address: "Karnataka",
  //   City: "Bengolore",
  //   Region: "Hindu",
  //   PostalCode: "560102",
  //   Country: "India",
  //   Phone: "7204000000",
  //   Fax: "01234567"
  // };

  // this.http.put(PutURL+"PMMR1", cust).subscribe((element) => {
  // });
  // this.http.get(GetURLByID + "PMMR1", {
  //   responseType: "json",
  //   observe: "response"
  // }).subscribe((element) => {
  //   console.log(element);
  // });

  // this.http.get(GetURLByID + "PMMR", {
  //   responseType: "json",
  //   observe: "events"
  // }).subscribe((element) => {
  //   // if(element.type == HttpEventType.ResponseHeader){
  //   //   console.log("executed");
  //   // };
  //   if (element.type == HttpEventType.Sent) {
  //     console.log("element type is " + element.type);
  //   }
  // });

  //}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
