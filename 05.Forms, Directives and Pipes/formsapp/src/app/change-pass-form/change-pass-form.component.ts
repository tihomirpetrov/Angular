import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControlName, FormControl} from "@angular/forms";


@Component({
  selector: 'app-change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.css']
})
export class ChangePassFormComponent implements OnInit {

  form = new FormGroup({
    "currentPass": new FormControl(''),
    "newPass": new FormControl(''),
    "matchPass": new FormControl('')
  })

  log(){
    console.log(this.form.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
