import { Component } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { TaskUseCase } from '../../core/usecases/task-usecase';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {

  taskTitle = '';
  tasks: Task[] = [];

  constructor(private taskUseCase: TaskUseCase) {
    this.taskUseCase.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  addTask(): void {
    const newTask: Task = {
      id: Math.random().toString(36).substring(2),
      title: this.taskTitle,
      completed: false,
    };
    this.taskUseCase.addTask(newTask);
    this.taskTitle = '';
  }

  removeTask(id: string): void {
    this.taskUseCase.removeTask(id);
  }

}
