import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryHomeComponent } from './ministry-home.component';

describe('MinistryHomeComponent', () => {
  let component: MinistryHomeComponent;
  let fixture: ComponentFixture<MinistryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
