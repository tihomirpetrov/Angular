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
  theaters: string = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  authentication: string = '&api_key=';


  constructor(private http: HttpClient) {
  }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getTheaters() : Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
  }
}
