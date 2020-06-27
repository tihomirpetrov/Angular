import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

const pinWeightIndex: number[] = [2, 4, 8, 5, 10, 9, 7, 3, 6, 0];


@Injectable({
  providedIn: 'root',
})

export class CheckPinService {

  getBirthday(egn: string): Observable<string> {
    const result = this.CalculateBirthday(egn);
    return of(result);
  }

  getGender(egn: string): Observable<string> {
    const number = this.GetEGNArray(egn)[8];
    let result = '';
    number % 2 === 0 ? result = 'male' : result = 'female';
    return of(result);
  }

  GetValidEGN(egn: string): Observable<boolean> {
    let result = false;
    if (egn && egn.toString().length === 10 && Number(egn)) {
      const egnArray = this.GetEGNArray(egn);
      let weight = 0;

      for (let i = 0; i < pinWeightIndex.length; i++) {
        weight += egnArray[i] * pinWeightIndex[i];
      }
      if ((weight % 11) % 10 === egnArray[9]) result = true;
    }
    return of(result);
  }

  private GetEGNArray(egn: string): number[] {
    const egnArray: number[] = [];

    for (let i = 0; i < egn.toString().length; i++) {
      const number = Number(egn[i]);
      egnArray.push(number);
    }
    return egnArray;
  }

  private CalculateBirthday(egn: string): string {
    const egnArray = this.GetEGNArray(egn);
    const year = egnArray[0] * 10 + egnArray[1];
    const month = egnArray[2] * 10 + egnArray[3];
    const dayBorn = egnArray[4] * 10 + egnArray[5];
    let yearBorn = 1900 + year;
    let monthBorn = month;
    if (month > 40) {
      yearBorn += 100;
      monthBorn -= 40;
    } else if (month > 20) {
      yearBorn -= 100;
      monthBorn -= 20;
    }
    return `${String(dayBorn).padStart(2, '0')}/${String(monthBorn).padStart(2, '0')}/${yearBorn}`;
  }
}

