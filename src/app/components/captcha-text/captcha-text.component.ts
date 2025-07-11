import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/buttonGo.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-captcha-text',
  standalone: true,
  imports: [ButtonComponent, FormsModule, CommonModule],
  templateUrl: './captcha-text.component.html',
})
export class CaptchaTextComponent {
  constructor(private router: Router) {}

  input = '';

  incorrect = false;

  finish() {
    if (this.input === 'e3TJ6Jdp') {
      this.router.navigate(['/result']);
    } else {
      this.incorrect = true;
      return;
    }
  }
}
