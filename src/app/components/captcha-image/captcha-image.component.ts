import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StepService } from '../../services/step.service';
import { ButtonComponent } from '../../shared/button/buttonGo.component';

@Component({
  selector: 'app-captcha-image',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './captcha-image.component.html',
})
export class CaptchaImageComponent {
  constructor(private router: Router) {
    this.shuffledImages = this.shuffleArray(this.images);
  }

  private stepService = inject(StepService);

  images = ['1', '2', '3', '4', '5', '6', '7', '8'];

  shuffledImages: string[];

  shuffleArray(array: string[]): string[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  clicked: string[] = [];

  permittedImages(image: string) {
    if (this.clicked.includes(image)) {
      this.clicked = this.clicked.filter((i) => i !== image);
    } else if (this.clicked.length < 3) {
      this.clicked.push(image);
    }
  }

  nextStep() {
    const a = ['6', '7', '8'].every((i) => this.clicked.includes(i));
    if (a) {
      this.stepService.nextStep();
    }
  }
}
