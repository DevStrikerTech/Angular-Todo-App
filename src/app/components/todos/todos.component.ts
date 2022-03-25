import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { TodoService } from 'src/app/service/todo.service';
import { Todo } from './../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[];

  constructor( private TodoService: TodoService) { 
    this.todos = [];
  }

  ngOnInit(): void {
    this.TodoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  updateTodoStatus = (todo: Todo) => {
    this.TodoService.updateTodoStatus(todo);
  }

  deleteTodo = (todo: Todo) => {
    this.TodoService.deleteTodo(todo);
  }

}
