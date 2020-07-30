import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // public newId: number;

  constructor() {
  }

  public addTask(id:number, task: string, due: Date): void{
    let newTask = new Todo(id, task, due);
    // console.log(this.newId, task, due);
    let tasks = this.getTasks();
    tasks.push(newTask);

    this.setLocalStorageTasks(tasks);
  }

  public getTasks(): Todo[]{
    let localStorageData = JSON.parse(localStorage.getItem('tasks'));
    return localStorageData == null ? [] : localStorageData.tasks;
  }

  public deleteTask(id: number): void{
    let tasks = this.getTasks();
    tasks = tasks.filter((newTask)=> newTask.id != id );
    this.setLocalStorageTasks(tasks);
  }

  public setLocalStorageTasks(tasks: Todo[]=[]): void{
    localStorage.setItem('tasks', JSON.stringify({tasks: tasks}))
  }

}
