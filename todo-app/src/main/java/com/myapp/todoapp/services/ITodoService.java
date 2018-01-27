package com.myapp.todoapp.services;

import java.util.List;

import com.myapp.todoapp.models.Todo;

public interface ITodoService {

	public List<Todo> fetchAllTodos();
	
	public Todo saveTodo(Todo todo);
	
	public Todo fetchTodoById(String id);
	
	public Todo updateTodoById(Todo todo);
	
	public void deleteTodoById(String id);
	
	public Todo markTodoAsCompleted(Todo todo);
	
}
