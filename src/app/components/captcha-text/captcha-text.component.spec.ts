import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaTextComponent } from './captcha-text.component';

describe('CaptchaTextComponent', () => {
  let component: CaptchaTextComponent;
  let fixture: ComponentFixture<CaptchaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptchaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
