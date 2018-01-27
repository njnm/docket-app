import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Todo } from './todo';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { HttpService } from './../utils/http.service'
import { CONSTANTS } from './../utils/app.constants'

@Injectable()
export class TodoService {
  private baseUrl = CONSTANTS.envurl;

  constructor(private httpService: HttpService) { }

  getAllTodos():  Observable<Todo[]> {
    return this.httpService.get(this.baseUrl + '/todo/all')
      .map(response => response.json() as Todo[])
  }

  createTodo(todoData: Todo): Observable<Todo> {
    return this.httpService.post(this.baseUrl + '/todos', todoData)
      .map(response => response.json() as Todo)
  }

  updateTodo(todoData: Todo): Observable<Todo> {
    return this.httpService.put(this.baseUrl + '/todos', todoData)
      .map(response => response.json() as Todo)
  }

  deleteTodo(id: string): Observable<any> {
    return this.httpService.delete(this.baseUrl + '/todos/' + id)
  }

  markAsCompleted(todoData: Todo): Observable<Todo> {
    return this.httpService.put(this.baseUrl + '/mark-completed', todoData)
      .map(response => response.json() as Todo)
  }
}
