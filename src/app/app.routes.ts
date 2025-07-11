import { Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CaptchaComponent } from './pages/captcha/captcha.component';
import { inject } from '@angular/core';
import { StepService } from './services/step.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'captcha',
    component: CaptchaComponent,
    canActivate: [
      () => {
        const step = inject(StepService);
        const router = inject(Router);

        if (step.step() < 1) {
          router.navigateByUrl('/');
          return false;
        }

        return true;
      },
    ],
  },
];
