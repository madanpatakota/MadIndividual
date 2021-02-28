import { Component, OnInit } from '@angular/core';
import { User } from '../sign-up/user';
import { UserService } from '../sign-up/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  // user: User = {
  //   Mail: '',
  //   phonenumber: '',
  //   Name: '',
  //   password: '',
  //   repeatpassword: '',
  //   jobtype: ''
  // };

  user = new User();
  //Difference b/w user and up and down 
  //user:User;  

  ngOnInit(): void {

  }

  evtSignUp(user) {
    this.userService.SignUp(user);
  }



}
