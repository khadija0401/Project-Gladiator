import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMinistryStudentApplicationsComponent } from './view-ministry-student-applications.component';

describe('ViewMinistryStudentApplicationsComponent', () => {
  let component: ViewMinistryStudentApplicationsComponent;
  let fixture: ComponentFixture<ViewMinistryStudentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMinistryStudentApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMinistryStudentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
