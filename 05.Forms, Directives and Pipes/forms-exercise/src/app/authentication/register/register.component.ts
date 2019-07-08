import { Component, OnInit } from '@angular/core';
import { RegisterModel } from "../../models/registerModel";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel

  constructor() {
    this.registerModel =  new RegisterModel('','','','','', '18');
  }


  ngOnInit() {
  }

}
