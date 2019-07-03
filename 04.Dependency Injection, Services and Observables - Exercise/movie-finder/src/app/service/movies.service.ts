import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Movies} from '../models/movies';
const apiKey = 'ec0671affc3caa9922695725b291f316';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama: string = 'discover/movie?certification_country=US&certification.lte=R&sort_by=revenue.desc&with_cast=3896';
  authentication: string = '&api_key=';
  movie: string = 'movie/';
  movieAuth: string = '?api_key=';

  constructor(private http: HttpClient) {
  }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getTheaters(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
  }

  getKids(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
  }

  getDrama(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`);
  }

  getMovie(id){
    return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
  }

  findAMovie(myQuery){
    //console.log((`${this.path}` + search + `${this.authentication}${apiKey}`));
    //https://api.themoviedb.org/3/search/movie&query='+search + "&api_key=" + apiKey
    return this.http.get('https://api.themoviedb.org/3/search/movie?query='+ myQuery + "&api_key=" + apiKey);
  }
}
