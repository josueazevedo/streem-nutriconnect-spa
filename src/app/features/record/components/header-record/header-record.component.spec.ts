import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRecordComponent } from './header-record.component';

describe('HeaderRecordComponent', () => {
  let component: HeaderRecordComponent;
  let fixture: ComponentFixture<HeaderRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
