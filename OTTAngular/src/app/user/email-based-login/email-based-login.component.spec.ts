import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBasedLoginComponent } from './email-based-login.component';

describe('EmailBasedLoginComponent', () => {
  let component: EmailBasedLoginComponent;
  let fixture: ComponentFixture<EmailBasedLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBasedLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailBasedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
