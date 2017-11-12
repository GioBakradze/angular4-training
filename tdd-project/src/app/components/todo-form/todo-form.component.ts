import { Component, OnInit } from '@angular/core';
import { TodoManagerService } from '../../services/todo-manager.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  text: string;

  constructor(private todoManagerService: TodoManagerService) {
    this.text = '';
  }

  save() {
    this.todoManagerService.add({
      text: this.text
    });
  }

  ngOnInit() {
  }

}
