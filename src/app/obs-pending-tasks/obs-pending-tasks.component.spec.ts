import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsPendingTasksComponent } from './obs-pending-tasks.component';

describe('ObsPendingTasksComponent', () => {
  let component: ObsPendingTasksComponent;
  let fixture: ComponentFixture<ObsPendingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsPendingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsPendingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
