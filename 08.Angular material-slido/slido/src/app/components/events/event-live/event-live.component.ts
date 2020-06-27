import {Component, Input, OnInit} from '@angular/core';
import {EventsService} from '../../../core/services/events.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Question} from '../../shared/models/question-info.model';

@Component({
  selector: 'app-event-live',
  templateUrl: './event-live.component.html',
  styleUrls: ['./event-live.component.css']
})
export class EventLiveComponent implements OnInit {
  eventId: string;
  questions: Question[];
  @Input() question;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.eventId = params['id'];
    });

    this.eventService.fetchQuestionsForEvent(this.eventId);

    this.eventService.liveEventQuestionsChanged.subscribe((data) => {
      debugger;
      this.questions = data;
    });

  }

}
