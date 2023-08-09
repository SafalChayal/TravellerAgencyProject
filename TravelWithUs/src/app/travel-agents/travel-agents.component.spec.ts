import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgentsComponent } from './travel-agents.component';

describe('TravelAgentsComponent', () => {
  let component: TravelAgentsComponent;
  let fixture: ComponentFixture<TravelAgentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelAgentsComponent]
    });
    fixture = TestBed.createComponent(TravelAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
