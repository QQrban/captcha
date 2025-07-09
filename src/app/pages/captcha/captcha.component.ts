import { Component, inject } from '@angular/core';
import { StepService } from '../../services/step.service';
import { CaptchaImageComponent } from '../../components/captcha-image/captcha-image.component';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [CaptchaImageComponent],
  templateUrl: './captcha.component.html',
})
export class CaptchaComponent {
  private stepService = inject(StepService);

  get step() {
    return this.stepService.step();
  }
}
