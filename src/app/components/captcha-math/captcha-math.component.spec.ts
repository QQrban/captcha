import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaMathComponent } from './captcha-math.component';

describe('CaptchaMathComponent', () => {
  let component: CaptchaMathComponent;
  let fixture: ComponentFixture<CaptchaMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptchaMathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptchaMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
