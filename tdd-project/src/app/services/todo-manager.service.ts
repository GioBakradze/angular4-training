import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/skip';

@Injectable()
export class TodoManagerService {

  list: TodoItem[];
  changed: BehaviorSubject<any>;

  constructor() {
    this.list = [];
    this.changed = (new BehaviorSubject<any>(null));
  }

  exists(item: TodoItem): boolean {
    const filtered = this.list.filter((todo: TodoItem) => todo.text === item.text);
    return filtered.length !== 0;
  }

  add(item: TodoItem): void {
    if (!this.exists(item)) {
      this.list.push(item);
      this.changed.next({});
    }
  }

}
