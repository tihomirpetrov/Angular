import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckPinService} from '../check-pin.service';
import {ShareService} from "../share.service";

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {
  egnNum: string;
  birthday: string;
  gender: string;
  invalidPin = false;

  constructor(private cps: CheckPinService,
              private ss: ShareService) {
  }

  ngOnInit() {
  }

  checkEgn() {
    this.birthday = undefined;
    this.gender = undefined;
    this.invalidPin = false;

    this.cps.GetValidEGN(this.egnNum).subscribe(enteredPin => {
      if (enteredPin) {
        this.cps.getBirthday(this.egnNum).subscribe(data => {
          this.birthday = data;
        });

        this.cps.getGender(this.egnNum).subscribe(data => {
          this.gender = data;
          this.ss.changeGender(this.gender);
        });
      } else {
        this.invalidPin = true;
      }
    });
  }
}
