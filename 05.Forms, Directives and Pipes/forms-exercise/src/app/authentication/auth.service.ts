import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginModel} from "../models/login.model";
import {RegisterModel} from "../models/register.model";

const appKey = "kid_ByhZCAbZS";
const appSecret = "b6b7216563204555a02fbb5a0949a974";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentAuthToken : string;

  constructor(private http : HttpClient) { }

  login(model : LoginModel){
    return this.http.post(loginUrl, JSON.stringify(model), {headers: this.createAuthHeaders('Basic')});
  }

  register(model: RegisterModel){
    return this.http.post(registerUrl, JSON.stringify(model), {headers: this.createAuthHeaders('Basic')});
  }

  logout(){
    return this.http.post(logoutUrl, {}, {headers: this.createAuthHeaders('Kinvey')});
  }

  checkIfLogged(){
    return this.currentAuthToken === localStorage.getItem('authtoken');
  }

  get authtoken(){
    return this.currentAuthToken;
  }

  set authtoken(value : string){
    this.currentAuthToken = value;
  }

  private createAuthHeaders(type: string){
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization' : `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type' : 'application/json'
      })
    }
    else {
      return new HttpHeaders({
        'Authorization' : `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type' : 'application/json'
      })
    }
  }


}
