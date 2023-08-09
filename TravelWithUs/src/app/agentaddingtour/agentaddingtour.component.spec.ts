import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentaddingtourComponent } from './agentaddingtour.component';

describe('AgentaddingtourComponent', () => {
  let component: AgentaddingtourComponent;
  let fixture: ComponentFixture<AgentaddingtourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentaddingtourComponent]
    });
    fixture = TestBed.createComponent(AgentaddingtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
