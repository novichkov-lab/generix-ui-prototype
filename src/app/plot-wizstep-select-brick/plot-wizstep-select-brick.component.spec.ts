import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotWizstepSelectBrickComponent } from './plot-wizstep-select-brick.component';

describe('PlotWizstepSelectBrickComponent', () => {
  let component: PlotWizstepSelectBrickComponent;
  let fixture: ComponentFixture<PlotWizstepSelectBrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotWizstepSelectBrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotWizstepSelectBrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
