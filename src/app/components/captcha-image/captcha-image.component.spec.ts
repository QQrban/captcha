import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaImageComponent } from './captcha-image.component';

describe('CaptchaImageComponent', () => {
  let component: CaptchaImageComponent;
  let fixture: ComponentFixture<CaptchaImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptchaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
