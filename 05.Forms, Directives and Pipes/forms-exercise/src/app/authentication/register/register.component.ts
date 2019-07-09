import { Component, OnInit } from '@angular/core';
import { RegisterModel } from "../../models/register.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterModel;
  loginFailed : boolean;
  errorMessage : string;

  constructor( private authService : AuthService, private router : Router) {
    this.form =  new RegisterModel('','','','','','', 18);
  }

  ngOnInit() {
  }

  registration() {
    delete this.form['confirmPassword'];
    this.authService.register(this.form)
      .subscribe(
        data => {
          this.router.navigate(['/login'])
       },
        err =>{
          console.log(err);
        }
      )
    //console.log(this.form);
  }

  get diagnostic() { return JSON.stringify(this.form); }
}
