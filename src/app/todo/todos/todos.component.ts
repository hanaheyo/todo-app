import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: {
    done: boolean,
    text: string
  }[];

  constructor() { 
    this.todos = [
      { done:false, text: '운동하기' },
      { done:true, text: '공부하기' }
    ]
   }

  ngOnInit(): void {
  }

  toggleTodo(todo) {
    todo.done = !todo.done
  }

}
