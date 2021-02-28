import { Injectable, Input } from '@angular/core';
import { User, basicUser } from '../sign-up/user';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // @Input('localHost') localHost;
  //http = new HttpClient();
  //localHost: string = "http://localhost:4599";
  localHost: string = "https://localhost:44309/api/user";
  subject = new Subject();
  SignUp(user: User) {

    const userDetails: basicUser = {
      Mail: "Mdan.patakota@gmail.com"
    }

    user.Mail = "madan.patakota@gmail.com";
    user.phonenumber = "1233";
    user.Name = "madan";
    user.password = "madanmohan";
    user.repeatpassword = "madanmohan";
    user.jobtype = "contract";
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post("https://localhost:44309/api/user",
      JSON.stringify({user}),{headers:headers}).pipe(
        map(responsedata => {
          console.log(".......");
        })
      ).subscribe((data) => {
        console.log(data);
      })
  
  }

}
