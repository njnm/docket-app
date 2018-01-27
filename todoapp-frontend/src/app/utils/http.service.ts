import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { catchError } from "rxjs/operators";

@Injectable()
export class HttpService {
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  get(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers })
    .pipe( catchError(this.handleError));
  }

  post(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, data, {
      headers: headers
    }).pipe( catchError(this.handleError));;
  }

  put(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(url, data, {
      headers: headers
    }).pipe( catchError(this.handleError));;
  }

  patch(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.patch(url, data, {
      headers: headers
    }).pipe( catchError(this.handleError));;
  }

  delete(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(url, {
      headers: headers
    }).pipe( catchError(this.handleError));;
  }

  handleError(error: any): Observable<any> {
    console.error('Error occured ', error);
    return Observable.throw(error.message || error);
  }
}
