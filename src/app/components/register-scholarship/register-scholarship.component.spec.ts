import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterScholarshipComponent } from './register-scholarship.component';

describe('RegisterScholarshipComponent', () => {
  let component: RegisterScholarshipComponent;
  let fixture: ComponentFixture<RegisterScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterScholarshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
