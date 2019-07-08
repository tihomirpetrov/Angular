import { Component, OnInit } from '@angular/core';
import { RegisterModel } from "../../models/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterModel;

  constructor( ) {
    this.form =  new RegisterModel('','','','','','', 18);
  }

  ngOnInit() {
  }

  registration() {
    console.log(this.form);
  }

  get diagnostic() { return JSON.stringify(this.form); }
}