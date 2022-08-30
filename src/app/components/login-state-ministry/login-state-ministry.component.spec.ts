import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStateMinistryComponent } from './login-state-ministry.component';

describe('LoginStateMinistryComponent', () => {
  let component: LoginStateMinistryComponent;
  let fixture: ComponentFixture<LoginStateMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStateMinistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStateMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
