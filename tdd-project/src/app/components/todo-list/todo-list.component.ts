import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoManagerService } from '../../services/todo-manager.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnDestroy {

  list: TodoItem[];
  listChangeSubscription: Subscription;

  constructor(private todoManagerService: TodoManagerService) {
    this.list = [];
    this.listChangeSubscription = this.todoManagerService
      .changed
      .skip(1)
      .subscribe(() => {
        this.list = this.todoManagerService.list;
      });
  }

  ngOnDestroy() {
    this.listChangeSubscription.unsubscribe();
  }

}
