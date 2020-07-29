import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService: TaskService, public router: Router) { }

  ngOnInit(): void {
  }

  public addTask(task: any, dueDate: any): void{
    this.taskService.addTask(<string>task.value, <Date>dueDate.value);
  }


  public taskDetails(id: number, task: string,dueDate: Date){
    // console.log(id, task, dueDate);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "ids": id,
          "tasks": task,
          "dueDates": dueDate,
      }
  };
  this.router.navigate(["task-details"], navigationExtras);
  }
}
