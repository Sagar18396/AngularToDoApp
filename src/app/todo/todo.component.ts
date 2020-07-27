import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

   addition:any = []

  constructor() { }

  ngOnInit(): void {

  }

  addTask(a:any){
    let c = a.value
    this.addition.push(c)
  }

  edit(i:any){
    console.log(i)
  }

  delete(i:any){
    console.log(i)
    const index: number = this.addition.indexOf(i);
    this.addition.splice(index, 1);
  }

}


