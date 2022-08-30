import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMinistryInstituteApplicationsComponent } from './view-ministry-institute-applications.component';

describe('ViewMinistryInstituteApplicationsComponent', () => {
  let component: ViewMinistryInstituteApplicationsComponent;
  let fixture: ComponentFixture<ViewMinistryInstituteApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMinistryInstituteApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMinistryInstituteApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
