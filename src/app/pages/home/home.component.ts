import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../../services/step.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  step = inject(StepService);
  constructor(private router: Router) {}

  startCaptcha() {
    this.router.navigate(['/captcha']);
    this.step.nextStep();
  }
}
