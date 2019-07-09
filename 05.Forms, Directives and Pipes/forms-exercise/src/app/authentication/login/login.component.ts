import { Component, OnInit } from '@angular/core';
import {LoginModel} from "../../models/login.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel;
  loginFailed : boolean;
  errorMessage : string;

  constructor(private  authService : AuthService, private router : Router) {
  this.loginModel = new LoginModel('','');
  }

  ngOnInit() {
  }

  login() {
    //console.log(this.loginModel);
    this.authService.login(this.loginModel)
      .subscribe( data=>{
        this.successfulLogin(data);
        this.router.navigate(['/home']);
    },
      err =>{
        this.loginFailed = true;
        this.errorMessage = err.error.description;
      })
  }

  successfulLogin(data){
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
  }
}
