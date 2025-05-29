import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlockedComponent } from './user-blocked.component';

describe('UserBlockedComponent', () => {
  let component: UserBlockedComponent;
  let fixture: ComponentFixture<UserBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBlockedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
