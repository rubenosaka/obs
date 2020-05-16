import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsCompletedTasksComponent } from './obs-completed-tasks.component';

describe('ObsCompletedTasksComponent', () => {
  let component: ObsCompletedTasksComponent;
  let fixture: ComponentFixture<ObsCompletedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsCompletedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsCompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
