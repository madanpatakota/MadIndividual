import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css']
})
export class GlobalErrorComponent implements OnInit {

  constructor(private router: Router, private activteRouter: ActivatedRoute) { }

  ErrorMessage = "";
  evtClick() {
    console.log("erroe");
    this.router.navigate(['customer']);
  }
  ngOnInit(): void {
    this.activteRouter.queryParams.subscribe((params) => {
      this.ErrorMessage = params.Message;
      debugger;
      console.log(this.ErrorMessage);
    });
  }

}
