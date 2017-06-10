import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getFilms() {
    return this.http.get('http://swapi.co/api/films/').map(res => res.json());
  }

  getPeople() {
    return this.http.get('http://swapi.co/api/people/').map(res => res.json());
  }

  getPlanets() {
    return this.http.get('http://swapi.co/api/planets/').map(res => res.json());
  }

}
