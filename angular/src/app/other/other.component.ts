import {Component, Input, OnInit} from '@angular/core';
import {ShareService} from "../share.service";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  gender: string;

  constructor(private ss: ShareService) {
  }

  ngOnInit() {
    this.ss.currentGender.subscribe(data => {
      this.gender = data;
    });
  }

}
