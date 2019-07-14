import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FurnitureAllComponent} from "./furniture-all/furniture-all.component";
import {FurnitureDetailsComponent} from "./furniture-details/furniture-details.component";
import {CreateFurnitureComponent} from "./create-furniture/create-furniture.component";
import {FurnitureUserComponent} from "./furniture-user/furniture-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FurnitureService} from "./furniture.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'create', component: CreateFurnitureComponent },
      { path: 'user', component: FurnitureUserComponent },
      { path: 'all', component: FurnitureAllComponent },
      { path: 'details/:id', component: FurnitureDetailsComponent }
    ])
  ],
  declarations: [
    FurnitureAllComponent,
    FurnitureDetailsComponent,
    CreateFurnitureComponent,
    FurnitureUserComponent
  ],
  providers: [
    FurnitureService
  ]
})
export class FurnitureModule { }
