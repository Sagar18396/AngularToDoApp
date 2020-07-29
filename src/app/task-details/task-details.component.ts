import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  i: number;
  t: string;
  d: Date;

  constructor(public taskService: TaskService, public route: ActivatedRoute, public router: Router) {
      this.route.queryParams.subscribe(params => {
      this.i = params["ids"];
      this.t = params["tasks"];
      this.d = params["dueDates"];
      console.log(this.i, this.t, this.d);
  });
   }

  ngOnInit(): void {
  }

  public deleteTask(id: number){
    this.taskService.deleteTask(id);
    this.router.navigate(["task-list"]);
  }

}
