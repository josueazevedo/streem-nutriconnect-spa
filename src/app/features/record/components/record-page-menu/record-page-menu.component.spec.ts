import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordPageMenuComponent } from './record-page-menu.component';

describe('RecordPageMenuComponent', () => {
  let component: RecordPageMenuComponent;
  let fixture: ComponentFixture<RecordPageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordPageMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
