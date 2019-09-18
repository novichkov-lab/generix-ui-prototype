import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotWizstepMapAxisComponent } from './plot-wizstep-map-axis.component';

describe('PlotWizstepMapAxisComponent', () => {
  let component: PlotWizstepMapAxisComponent;
  let fixture: ComponentFixture<PlotWizstepMapAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotWizstepMapAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotWizstepMapAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
