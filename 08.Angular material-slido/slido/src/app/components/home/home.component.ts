import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../core/services/events.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventForm: FormGroup;


  constructor(
    private fb: FormBuilder,
              private eventsService: EventsService
              ) { }

  ngOnInit() {
  this.eventForm = this.fb.group({
    code: ['', [Validators.required]]
  });
  }

  displayLiveEvent(){
    const code = this.eventForm.value.code;

    this.eventsService.fetchEventByCode(code);
  }

}
