import { Component, inject, input } from '@angular/core';
import { ButtonComponent } from '../../shared/button/buttonGo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-captcha-math',
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule],
  templateUrl: './captcha-math.component.html',
})
export class CaptchaMathComponent {
  private stepService = inject(StepService);

  random = Math.floor(Math.random() * 3) + 1;

  mathInput = '';
  incorrect = false;

  nextStep() {
    if (
      (this.random === 1 && this.mathInput === '26') ||
      (this.random === 2 && this.mathInput === '27') ||
      (this.random === 3 && this.mathInput === '14')
    ) {
      this.stepService.nextStep();
    } else {
      this.incorrect = true;
    }
  }
}
