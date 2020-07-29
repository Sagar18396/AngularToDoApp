import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
