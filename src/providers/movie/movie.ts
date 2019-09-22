import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=b3f2b56e243d41de4a83df0e621a37ff';

  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
getNowMovie(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }
getUPcomingMovie(){
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }
getPopularMovie(){
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }
getTopratedMovie(){
    const url = this.baseURL + 'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }
  searchMovie(query) {
    const url = this.baseURL + 'search/movie?query=' + query + '&' + this.apiKey;
    return this.http.get(url);
  }

}
