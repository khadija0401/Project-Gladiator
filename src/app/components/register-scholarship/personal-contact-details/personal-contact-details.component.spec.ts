import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContactDetailsComponent } from './personal-contact-details.component';

describe('PersonalContactDetailsComponent', () => {
  let component: PersonalContactDetailsComponent;
  let fixture: ComponentFixture<PersonalContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalContactDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
