import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotWizstepResultComponent } from './plot-wizstep-result.component';

describe('PlotWizstepResultComponent', () => {
  let component: PlotWizstepResultComponent;
  let fixture: ComponentFixture<PlotWizstepResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotWizstepResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotWizstepResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
