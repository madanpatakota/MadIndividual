import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from '../customers.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';
import { ICustomer } from 'src/app/customer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {

  constructor(private toastrservice: ToastrService, private http: HttpClient, private customerService: CustomersService,
    private modalService: NgbModal) {
    this.customerService.CustomerSuccessEmitter.subscribe((element) => {
      console.log("GetCustomer is ", element);

      const record = this.CustomersList.find((ele, index) => {
        if (element.CustomerID.trim() == ele.CustomerID.trim()) {
          this.CustomersList[index] = element;
          return element;
        }
      })
      if (!record) {
        this.CustomersList.push(element);
      }
      //this.CustomersList.push(element);
    })
  }

  CustomersList = [];
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.customerService.GetCustomers().subscribe((Response: any) => {
      // Response.data.slice(0, 2).forEach(CustomerRecord => {
      //   this.CustomersList.push({ ...CustomerRecord });
      // });
      //console.log("Response is what ", Response);
      // const Result = Response.body?.data.filter(((element: ICustomer) => {
      //   return element.CustomerID.trim().toLowerCase().includes("mad");
      // }));

      const Result = Response.data.filter(((element: ICustomer) => {
        return element.CustomerID.trim().toLowerCase().includes("mad");
      }));
      this.CustomersList = Result;
    }
      ,
      (error) => {
        //  console.log("Error is " , error);
        //  throw error;
      });
    //this.subscription.unsubscribe();
    //)
  }

  evtUpdate(record, Status) {
    const modalRef = this.modalService.open(CreateCustomerComponent, {
      ariaLabelledBy: 'modal-basic-title',
      backdropClass: 'light-blue-backdrop',
      windowClass: 'dark-modal',
      size: 'lg' //sm , xl,
      //centered:true,
      //scrollable : true
    });
    this.customerService.OpenModelPopUpByID(record, Status);
  }

  CallDelete(CustomerID) {

  }

  evtdelete(CustomerID: string, Index) {
    //http://bootboxjs.com/getting-started.html
    const Customerservice = this.customerService;
    const CustomersList = this.CustomersList;
    const ToastSerice = this.toastrservice;
    bootbox.confirm({
      title: "Delete",
      message: "Do you want to delete the selected record ?",
      buttons: {
        cancel: {
          label: '<i class="fa fa-times"></i> Cancel'
        },
        confirm: {
          label: '<i class="fa fa-check"></i> Confirm'
        }
      },
      callback: function (result) {
        console.log('This was logged in the callback: ' + result);
        if (result) {
          Customerservice.DeleteCustomer(CustomerID).subscribe((element) => {
            CustomersList.splice(Index, 1);
          })
          ToastSerice.success("Record deleted Successfully");
        }
      }
    });
    //bootbox.alert("Hi");
    //bootbox.confirm("Do you want to delete record ?", this.CallDelete(CustomerID))
    // this.customerService.DeleteCustomer(CustomerID).subscribe((element) => {
    //   this.CustomersList.splice(Index, 1);
    // })
  }
}
