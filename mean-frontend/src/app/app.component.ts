import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})

// rename the base component to standardize
export class AppComponent {
  protected readonly title = signal('mean-course');
}
