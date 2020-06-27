import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NbCalendarRange, NbDateService, NbIconConfig} from '@nebular/theme';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  disabledIconConfig: NbIconConfig = {icon: 'settings-2-outline', pack: 'eva'};
  range: NbCalendarRange<Date>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  ngOnInit(): void {
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

  goToUsers() {
    this.router.navigate(['users']);
  }

  goToAdmins() {
    this.router.navigate(['admins']);
  }

}
