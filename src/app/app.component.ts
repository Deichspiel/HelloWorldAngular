import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularTest';

  todoItem: string;
  toDoArray:Array<string>=[];
 
  addToDo(){
    this.toDoArray.push(this.todoItem);
    this.todoItem = '';
  }
}
