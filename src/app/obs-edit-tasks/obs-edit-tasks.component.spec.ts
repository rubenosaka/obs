import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsEditTasksComponent } from './obs-edit-tasks.component';

describe('ObsEditTasksComponent', () => {
  let component: ObsEditTasksComponent;
  let fixture: ComponentFixture<ObsEditTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsEditTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
