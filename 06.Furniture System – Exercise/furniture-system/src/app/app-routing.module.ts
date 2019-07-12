import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {CreateFurnitureComponent} from "./furniture/create-furniture/create-furniture.component";
import {FurnitureAllComponent} from "./furniture/furniture-all/furniture-all.component";
import {FurnitureUserComponent} from "./furniture/furniture-user/furniture-user.component";
import {AuthGuard} from "./authentication/guards/auth.guard";
import {FurnitureDetailsComponent} from "./furniture/furniture-details/furniture-details.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'furniture', loadChildren: './furniture/furniture.module#FurnitureModule', canActivate: [AuthGuard]},
  { path: 'furniture/create', component: CreateFurnitureComponent }, //, canActivate: [AuthGuard]
  { path: 'furniture/user', component: FurnitureUserComponent }, //, canActivate: [AuthGuard]
  { path: 'furniture/all', component: FurnitureAllComponent }, //, canActivate: [AuthGuard]
  { path: 'furniture/details/:id', component: FurnitureDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
