import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerComponent } from './traveller.component';

describe('TravellerComponent', () => {
  let component: TravellerComponent;
  let fixture: ComponentFixture<TravellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravellerComponent]
    });
    fixture = TestBed.createComponent(TravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
