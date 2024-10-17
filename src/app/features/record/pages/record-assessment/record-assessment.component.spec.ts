import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAssessmentComponent } from './record-assessment.component';

describe('RecordAssessmentComponent', () => {
  let component: RecordAssessmentComponent;
  let fixture: ComponentFixture<RecordAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
