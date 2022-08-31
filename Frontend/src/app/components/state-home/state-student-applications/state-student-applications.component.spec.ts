import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStudentApplicationsComponent } from './state-student-applications.component';

describe('StateStudentApplicationsComponent', () => {
  let component: StateStudentApplicationsComponent;
  let fixture: ComponentFixture<StateStudentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateStudentApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateStudentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
