import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksFeesDetailsComponent } from './marks-fees-details.component';

describe('MarksFeesDetailsComponent', () => {
  let component: MarksFeesDetailsComponent;
  let fixture: ComponentFixture<MarksFeesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksFeesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksFeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
