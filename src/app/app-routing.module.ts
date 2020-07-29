import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-details', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TaskListComponent,
  TaskDetailsComponent
]