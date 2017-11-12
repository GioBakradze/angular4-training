import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoManagerService } from '../../services/todo-manager.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoManagerService: TodoManagerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent
      ],
      providers: [
        TodoManagerService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoManagerService = TestBed.get(TodoManagerService);
  });

  it('once changed event fired on TodoManagerService it should update list property', fakeAsync(() => {

    const todoItem1 = {
      text: 'some text 1'
    };

    const todoItem2 = {
      text: 'some text 2'
    };

    expect(component.list).toEqual([]);
    todoManagerService.add(todoItem1);
    tick();
    expect(component.list).toEqual([todoItem1]);

    todoManagerService.add(todoItem2);
    tick();
    expect(component.list).toEqual([todoItem1, todoItem2]);
  }));

});
