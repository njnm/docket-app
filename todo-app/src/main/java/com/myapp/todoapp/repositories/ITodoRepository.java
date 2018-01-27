package com.myapp.todoapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.myapp.todoapp.models.Todo;

@Repository
public interface ITodoRepository extends MongoRepository<Todo, String>{

}
