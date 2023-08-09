import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllagentComponent } from './allagent.component';

describe('AllagentComponent', () => {
  let component: AllagentComponent;
  let fixture: ComponentFixture<AllagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllagentComponent]
    });
    fixture = TestBed.createComponent(AllagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
