import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsCreateTasksComponent } from './obs-create-tasks.component';

describe('ObsCreateTasksComponent', () => {
  let component: ObsCreateTasksComponent;
  let fixture: ComponentFixture<ObsCreateTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsCreateTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsCreateTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
