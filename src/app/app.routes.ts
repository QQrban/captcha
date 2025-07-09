import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CaptchaComponent } from './pages/captcha/captcha.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'captcha', component: CaptchaComponent },
];
