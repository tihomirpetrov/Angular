import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../service/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular : Object;
  theaters : Object;

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
      data.results
      // console.log(data);
    })

    this.moviesService.getPopular().subscribe( data =>{
      this.theaters = data;
      // console.log(data);
    })
  }
}
