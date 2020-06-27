import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminsComponent} from './admins.component';
import {AdminsRoutingModule} from './admins-routing.module';
import {NbCalendarRangeModule, NbCardModule} from '@nebular/theme';



@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    NbCardModule,
    NbCalendarRangeModule,
  ]
})
export class AdminsModule { }
