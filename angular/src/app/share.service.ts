import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private genderSource = new BehaviorSubject('');
  currentGender = this.genderSource.asObservable();

  constructor() { }

  changeGender(gender: string) {
    this.genderSource.next(gender);
  }
}
