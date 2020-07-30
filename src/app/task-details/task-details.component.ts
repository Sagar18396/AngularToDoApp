import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { ActivatedRoute, Router } from "@angular/router";
import {Todo} from "../todo";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public i: number;
  public data: Todo;

  constructor(public taskService: TaskService, public route: ActivatedRoute, public router: Router) {
  //     this.route.queryParams.subscribe(params => {
  //     this.i = params["ids"];
  //     this.t = params["tasks"];
  //     this.d = params["dueDates"];
  //     console.log(this.i, this.t, this.d);
  // });
   }

  ngOnInit(): void {
    this.i = parseInt(this.route.snapshot.paramMap.get('id'));
    let localData = JSON.parse(localStorage.getItem('tasks'));
    localData = localData.tasks;
    for (var val of localData){
      if (<number>val.id == this.i){
        this.data = val;
      }
    console.log(this.data);
    }
  }

  public deleteTask(id: number){
    this.taskService.deleteTask(id);
    this.router.navigate(["task-list"]);
  }

}
