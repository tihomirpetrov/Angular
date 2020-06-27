import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit(): void {
    this.imagesUrl = ['https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg'];
  }

}
