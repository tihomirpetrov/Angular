import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-post-question',
  templateUrl: './event-post-question.component.html',
  styleUrls: ['./event-post-question.component.css']
})
export class EventPostQuestionComponent implements OnInit {
  postQuestionForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.postQuestionForm = this.fb.group({
      text: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(70)
      ]]
    });
  }
}
