import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../service/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  kids: Object;
  drama: Object;
  searchRes: any;
  isSearch: boolean;

  constructor(private moviesService: MoviesService) {
  }

  search(myQuery) {
    let value = myQuery['search'];
    this.moviesService.findAMovie(value).subscribe(data => {
      this.searchRes = data;
      this.isSearch = true;
      console.log(this.searchRes);
    });
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
      //console.log(data.results);
    })

    this.moviesService.getTheaters().subscribe(data => {
      this.theaters = data;
      //console.log(data.results);
    })

    this.moviesService.getKids().subscribe(data => {
      this.kids = data;
      //console.log(data.results);
    })

    this.moviesService.getDrama().subscribe(data => {
      this.drama = data;
      //console.log(data.results);
    })
  }
}
