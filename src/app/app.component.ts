import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  localHost:string = "http://localhost:4599";
  ngOnInit(){
    //this.localHost
    //console.log(this.localHost + " from appcomponent.........");
  }


}
