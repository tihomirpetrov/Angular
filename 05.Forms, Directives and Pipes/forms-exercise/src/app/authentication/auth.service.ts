import { Injectable } from '@angular/core';

const appKey = "kid_ByhZCAbZS";
const appSecret = "b6b7216563204555a02fbb5a0949a974";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
