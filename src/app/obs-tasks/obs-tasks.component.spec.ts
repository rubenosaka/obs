import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsTasksComponent } from './obs-tasks.component';

describe('ObsTasksComponent', () => {
  let component: ObsTasksComponent;
  let fixture: ComponentFixture<ObsTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
