import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {AppRoutingModule} from "./app-routing.module";
import {RegisterModel} from "./models/register.model";
import {LoginModel} from "./models/login.model";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
