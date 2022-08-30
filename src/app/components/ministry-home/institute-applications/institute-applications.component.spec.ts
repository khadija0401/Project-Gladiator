import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteApplicationsComponent } from './institute-applications.component';

describe('InstituteApplicationsComponent', () => {
  let component: InstituteApplicationsComponent;
  let fixture: ComponentFixture<InstituteApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
