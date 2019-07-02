import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  model: any;
  constructor() {
    this.model = {
      "processor":"Core i7"
    }
  }

  login(formData){
    console.log(formData);
  }

  ngOnInit() {
  }

}
