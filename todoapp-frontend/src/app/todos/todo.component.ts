import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { NgForm } from '@angular/forms';

import { ERROR_TYPES } from './../utils/app.errortypes';

@Component({
  selector: 'todos',
  templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {
  todos: Todo[];
  newTodo: Todo = new Todo();
  editing: boolean = false;
  editingTodo: Todo = new Todo();
  customFilter:Todo = new Todo();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.todoService.getAllTodos()
      .subscribe(todos => this.todos = todos.reverse() );
  }

  createTodo(todoForm: NgForm): void {
    if(todoForm.valid){
      this.todoService.createTodo(this.newTodo)
      .subscribe(createTodo => {
        todoForm.reset();
        this.newTodo = new Todo();
        this.todos.unshift(createTodo)
      },error => {
        todoForm.form.controls['description'].setErrors({'exists': true});
      });
    }else{
      todoForm.form.controls['description'].setErrors({'invalid': true});
    }

  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
    .subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id != id);
    });
  }

  updateTodo(todoData: Todo): void {
    console.log(todoData);
    this.todoService.updateTodo(todoData)
    .subscribe(updatedTodo => {
      let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
      this.clearEditing();
    });
  }

  addFilter(filterType: string): void {
    switch(filterType) {
       case 'all': {
          this.customFilter = new Todo();
          break;
       }
       case 'completed': {
          this.customFilter.isCompleted = true;
          break;
       }
       case 'pending': {
          this.customFilter.isCompleted = false;
          break;
       }
       default: {
          //statements;
          break;
       }
    }
  }

  toggleCompleted(todoData: Todo): void {
    todoData.isCompleted = !todoData.isCompleted;
    this.todoService.markAsCompleted(todoData)
    .subscribe(updatedTodo => {
      let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
      Object.assign(existingTodo, updatedTodo);
    });
  }

  editTodo(todoData: Todo): void {
    this.editing = true;
    Object.assign(this.editingTodo, todoData);
  }

  clearEditing(): void {
    this.editingTodo = new Todo();
    this.editing = false;
  }

}
