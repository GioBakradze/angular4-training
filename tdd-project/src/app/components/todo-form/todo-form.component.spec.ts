import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { TodoManagerService } from '../../services/todo-manager.service';
import { TodoItem } from '../../interfaces/todo-item';
import { FormsModule } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoManager: TodoManagerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoFormComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        TodoManagerService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoManager = TestBed.get(TodoManagerService);
  });

  it('save method should add new item to TodoManagerService', () => {
    const spy = spyOn(todoManager, 'add');
    const item: TodoItem = {
      text: 'some text'
    };
    spy.and.callThrough();

    component.text = item.text;
    component.save();
    fixture.detectChanges();

    expect(spy.calls.first().args[0]).toEqual(item);
  });

});
