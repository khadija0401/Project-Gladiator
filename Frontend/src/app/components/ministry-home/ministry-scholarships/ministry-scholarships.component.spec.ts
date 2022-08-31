import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryScholarshipsComponent } from './ministry-scholarships.component';

describe('MinistryScholarshipsComponent', () => {
  let component: MinistryScholarshipsComponent;
  let fixture: ComponentFixture<MinistryScholarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryScholarshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistryScholarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
