import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { SlidoLiveEvent } from "../../components/shared/models/live-event-model";
import {MatSnackBar} from "@angular/material";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {Question} from "../../components/shared/models/question-info.model";

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private _liveEvent: SlidoLiveEvent;
  private _liveEventQuestions: Question[] = [];

  liveEventChanged = new Subject<SlidoLiveEvent>();
  liveEventQuestionsChanged = new Subject<Question[]>()

  constructor(
    private afDb: AngularFirestore,
    private snackbar : MatSnackBar,
    private router: Router
  ) {  }

  fetchEventByCode(eventCode: string) {
    this.afDb.collection<SlidoLiveEvent>('events',
      (ref) => ref.where('code', '==', eventCode))
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            }
          })
        })
      )
      .subscribe((data) =>{
        if (data.length > 0){
          this._liveEvent = data[0];
          this.liveEventChanged.next({...this._liveEvent});
          this.router.navigate(['/event', this._liveEvent.id, 'live']);
        }
        else {
          this.snackbar.open(`No such event: ${eventCode} exist!`, 'Undo', {
            duration: 3000
          });
        }
      })
  }

  fetchQuestionsForEvent(eventId: string){
    this.afDb.collection<Question>('questions',
      (ref) => ref.where('eventId', '==', eventId))
      .valueChanges()
      .subscribe((questions) => {
        this._liveEventQuestions = questions;
        this.liveEventQuestionsChanged.next([...this._liveEventQuestions]);
      })
  }
}
