import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { SlideLiveEvent } from "../../components/shared/models/live-event-model";

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  constructor(
    private afDb: AngularFirestore
  ) {  }

  fetchEventByCode(eventCode: string) {
    this.afDb.collection<SlideLiveEvent>('events')
  }
}
