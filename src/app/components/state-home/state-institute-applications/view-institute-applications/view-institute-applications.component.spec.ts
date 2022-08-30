import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInstituteApplicationsComponent } from './view-institute-applications.component';

describe('ViewInstituteApplicationsComponent', () => {
  let component: ViewInstituteApplicationsComponent;
  let fixture: ComponentFixture<ViewInstituteApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInstituteApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInstituteApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
