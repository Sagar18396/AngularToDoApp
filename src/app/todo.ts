export class Todo {
    id: number;
    task: string;
    dueDate: Date;

    constructor(id: number, task: string, dueDate: Date){
        this.id = id;
        this.task = task;
        this.dueDate = dueDate;
    }
}
