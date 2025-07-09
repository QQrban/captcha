import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  step = signal(1);

  nextStep() {
    if (this.step() < 3) {
      this.step.update((n) => n + 1);
    }
  }

  constructor() {}
}
