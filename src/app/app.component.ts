// src/app/app.component.ts
import { Component } from '@angular/core';
import { TaskPageComponent } from './presentation/task-page/task-page.component';


@Component({
  selector: 'app-root',
  standalone: true, // Torna o componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskPageComponent], // Importa o componente standalone necessário
})
export class AppComponent {}
