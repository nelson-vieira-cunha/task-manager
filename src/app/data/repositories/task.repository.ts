import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../../core/models/task.model';
import { TaskRepository } from '../../core/interfaces/task-repository.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImpl implements TaskRepository {
  private tasks: Task[] = [];
  private tasksSubject = new Subject<Task[]>();

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }
}
