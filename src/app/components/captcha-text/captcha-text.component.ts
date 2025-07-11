import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/buttonGo.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captcha-text',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './captcha-text.component.html',
})
export class CaptchaTextComponent {
  constructor(private router: Router) {}

  input = '';

  finish() {
    if (this.input === 'e3TJ6Jdp') {
      this.router.navigate(['/result']);
    } else {
      alert('nah');
    }
  }
}
