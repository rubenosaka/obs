import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsModalsComponent } from './obs-modals.component';

describe('ObsModalsComponent', () => {
  let component: ObsModalsComponent;
  let fixture: ComponentFixture<ObsModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
