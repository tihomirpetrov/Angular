import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}