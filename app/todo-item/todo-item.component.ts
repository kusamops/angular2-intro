import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
	moduleId: module.id,
	selector: 'todo-item',
	templateUrl: 'todo-item.component.html',
	styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent{
	@Input() todo: Todo;
	@Output() delete = new EventEmitter();
	@Output() toggle = new EventEmitter();

	// Переключатель задачи - выполнена / нет
	onToggle(){
		this.toggle.emit(this.todo); 
	}

	// toggle(){
	// 	this.todo.completed = !this.todo.completed;
	// }

	onDelete(){
		this.delete.emit(this.todo);
	}
}