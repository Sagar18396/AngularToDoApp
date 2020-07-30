import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import {Router} from "@angular/router";
import {Todo} from "../todo";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public newId: number;
  constructor(public taskService: TaskService, public router: Router) { }

  ngOnInit(): void { 
    let tasks = this.taskService.getTasks();

    if (tasks.length == 0){
      this.newId = 1;
    }
    else{
      let lastId = tasks[tasks.length - 1].id;
      this.newId = lastId + 1;
    }
  }

  public addTask(id:any, task: any, dueDate: any): void{
    this.taskService.addTask(<number>id, <string>task.value, <Date>dueDate.value);
  }


  public taskDetails(data: Todo){
    // console.log(id, task, dueDate);
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //         "ids": id,
  //         "tasks": task,
  //         "dueDates": dueDate,
  //     }
  // };
  this.router.navigate(["task-details", data.id]);
  }
}
