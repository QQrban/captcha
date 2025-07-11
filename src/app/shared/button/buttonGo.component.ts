import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="classes"
      (click)="onClick.emit($event)"
      class="cursor-pointer bg-blue-600 text-white p-1 rounded-lg text-lg font-bold hover:bg-blue-700 active:bg-blue-800 transition-all ease-in-out w-20 mt-2"
    >
      {{ label() }}
    </button>
  `,
})
export class ButtonComponent {
  label = input('');
  classes = input('');
  onClick = output<MouseEvent>();
}
