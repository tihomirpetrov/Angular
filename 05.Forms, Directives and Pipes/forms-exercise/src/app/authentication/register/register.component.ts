import { Component, OnInit } from '@angular/core';
import { RegisterModel } from "../../models/register.model";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterModel;

  constructor( private authService : AuthService) {
    this.form =  new RegisterModel('','','','','','', 18);
  }

  ngOnInit() {
  }

  registration() {
    delete this.form['confirmPassword'];
    console.log(this.form);
  }

  get diagnostic() { return JSON.stringify(this.form); }
}
