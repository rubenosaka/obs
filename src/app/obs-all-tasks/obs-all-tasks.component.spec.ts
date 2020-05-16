import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsAllTasksComponent } from './obs-all-tasks.component';

describe('ObsAllTasksComponent', () => {
  let component: ObsAllTasksComponent;
  let fixture: ComponentFixture<ObsAllTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsAllTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
