import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentApplicationsComponent } from './view-student-applications.component';

describe('ViewStudentApplicationsComponent', () => {
  let component: ViewStudentApplicationsComponent;
  let fixture: ComponentFixture<ViewStudentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStudentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
