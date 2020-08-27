//search service implementation
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {

baseUrl: string = 'https://localhost:3000/api/songs';
constructor(private _http: Http) { }
search(queryString: string) {
      let _URL = this.baseUrl;
      return this._http.get(_URL);
  }
}