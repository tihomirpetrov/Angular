import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.css']
})
export class ChangePassFormComponent implements OnInit {

  form = new FormGroup({
    "currentPass": new FormControl('', [Validators.required]),
    "newPass": new FormControl(''),
    "matchPass": new FormControl('')
  })

  currentPass = "123";

  log() {
    console.log(this.form.get('currentPass').value);
    if (this.form.get('newPass').value != this.form.get('matchPass').value) {
      alert('passwords mismatch');
    }
    else {
      if (this.form.get('currentPass').value != this.currentPass) {
        alert('password is wrong');
      }
    }


  }

  constructor() {
  }

  ngOnInit() {
  }

}
