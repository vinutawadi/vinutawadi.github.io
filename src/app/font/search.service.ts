import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {
 
  constructor(private http: Http) { }

  

  fetchIcons() {
    return this.http.get('assets/data/icon-list.json')
      .map( resp => resp.json());
  }
}