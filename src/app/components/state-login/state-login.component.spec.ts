import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLoginComponent } from './state-login.component';

describe('StateLoginComponent', () => {
  let component: StateLoginComponent;
  let fixture: ComponentFixture<StateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
