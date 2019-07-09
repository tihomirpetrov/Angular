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
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./authentication/auth.service";


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
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
