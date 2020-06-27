import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../shared/models/question-info.model';

@Component({
  selector: 'app-event-question-info',
  templateUrl: './event-question-info.component.html',
  styleUrls: ['./event-question-info.component.css']
})
export class EventQuestionInfoComponent implements OnInit {
  @Input() questionInfo: Question;

  constructor() {
  }

  ngOnInit() {
  }

}
