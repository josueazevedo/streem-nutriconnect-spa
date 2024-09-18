import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTabContentComponent } from './page-tab-content.component';

describe('PageTabContentComponent', () => {
  let component: PageTabContentComponent;
  let fixture: ComponentFixture<PageTabContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTabContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
