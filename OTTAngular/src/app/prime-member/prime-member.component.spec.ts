import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeMemberComponent } from './prime-member.component';

describe('PrimeMemberComponent', () => {
  let component: PrimeMemberComponent;
  let fixture: ComponentFixture<PrimeMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
