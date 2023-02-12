import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() i:number
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter
  constructor(){}

  ngOnInit(): void {
    
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log('onclick has been triggered')
  }

  onCheckboxClick(todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
