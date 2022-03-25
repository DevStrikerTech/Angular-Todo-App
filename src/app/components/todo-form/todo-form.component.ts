import { Component, OnInit } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

import { Todo } from './../../model/Todo';
import { TodoService } from './../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;

  constructor(private todoService: TodoService) { 
    this.todoTitle = '';
  }

  ngOnInit(): void {
  }

  handleTodoAdd = () => {
    const newTodo: Todo = {
      id: uuidV4(),
      title: this.todoTitle,
      isComplete: false,
      date: new Date(),
    };

    this.todoService.addTodos(newTodo);
    this.todoTitle = '';
  }

}
