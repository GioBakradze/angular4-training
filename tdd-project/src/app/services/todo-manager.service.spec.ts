import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { TodoManagerService } from './todo-manager.service';

import 'rxjs/add/operator/skip';

describe('TodoManagerService', () => {

  let todoManagerService: TodoManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoManagerService
      ]
    });
    todoManagerService = TestBed.get(TodoManagerService);
  });

  it('add method should add new item to the list', () => {
    todoManagerService.add({text: 'some text'});
    expect(todoManagerService.list).toEqual([
      {text: 'some text'}
    ]);

    todoManagerService.add({text: 'some text 2'});
    expect(todoManagerService.list).toEqual([
      {text: 'some text'},
      {text: 'some text 2'}
    ]);
  });

  it('once item added to the list changed event should be fired', fakeAsync(() => {
    let changed = false;
    todoManagerService.changed.skip(1).subscribe(() => {
      changed = true;
    });
    todoManagerService.add({text: 'some text '});
    tick();
    expect(changed).toEqual(true);
  }));

  it('should not add same todo more than once', () => {
    todoManagerService.add({text: 'some text '});
    todoManagerService.add({text: 'some text '});
    expect(todoManagerService.list).toEqual([
      {text: 'some text '}
    ]);
  });
});
