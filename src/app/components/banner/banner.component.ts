import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  classes = input('');

  classesBanner = () => `bg-gray-500 flex justify-center p-3 ${this.classes}`;
}
