import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-proj';
}
