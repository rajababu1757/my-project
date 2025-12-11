import { Injectable } from '@angular/core';
import { task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks: task[] = [
  {id: 1, title: 'Task 1', description: 'Description 1', completed: false},
  {id: 2, title: 'Task 2', description: 'Description 2', completed: true},
  {id: 3, title: 'Task 3', description: 'Description 3', completed: false}  
];
  constructor() { }

  getTasks(): task[] {
    return this.tasks;
  }
  
}
