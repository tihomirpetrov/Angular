import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {NbButtonModule, NbCardModule, NbStepperModule, NbTabsetModule} from '@nebular/theme';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    NbTabsetModule
  ]
})
export class UsersModule { }
