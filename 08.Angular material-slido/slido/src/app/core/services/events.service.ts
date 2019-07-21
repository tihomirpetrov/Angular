import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { SlidoLiveEvent } from "../../components/shared/models/live-event-model";

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  constructor(
    private afDb: AngularFirestore
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
        console.log(data);
      })
  }
}
