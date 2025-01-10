// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskRepositoryImpl } from './data/repositories/task.repository';
import { TaskPageComponent } from './presentation/task-page/task-page.component';

@NgModule({
  declarations: [TaskPageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: 'TaskRepository', useClass: TaskRepositoryImpl }],
  bootstrap: [TaskPageComponent],
})
export class AppModule {}
