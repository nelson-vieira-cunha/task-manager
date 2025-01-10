import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

export interface TaskRepository {
  getTasks(): Observable<Task[]>;
  addTask(task: Task): void;
  removeTask(id: string): void;
}
