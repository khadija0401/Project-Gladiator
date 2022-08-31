import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInstituteApplicationsComponent } from './state-institute-applications.component';

describe('StateInstituteApplicationsComponent', () => {
  let component: StateInstituteApplicationsComponent;
  let fixture: ComponentFixture<StateInstituteApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateInstituteApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateInstituteApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
