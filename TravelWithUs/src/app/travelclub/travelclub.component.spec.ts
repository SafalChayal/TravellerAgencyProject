import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelclubComponent } from './travelclub.component';

describe('TravelclubComponent', () => {
  let component: TravelclubComponent;
  let fixture: ComponentFixture<TravelclubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelclubComponent]
    });
    fixture = TestBed.createComponent(TravelclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
