import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
tasks = this.taskService.getTasks();
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  } 

}
