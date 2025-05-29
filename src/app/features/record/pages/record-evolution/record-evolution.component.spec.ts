import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEvolutionComponent } from './record-evolution.component';

describe('RecordEvolutionComponent', () => {
  let component: RecordEvolutionComponent;
  let fixture: ComponentFixture<RecordEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordEvolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
