import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotWizardComponent } from './plot-wizard.component';

describe('PlotWizardComponent', () => {
  let component: PlotWizardComponent;
  let fixture: ComponentFixture<PlotWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
