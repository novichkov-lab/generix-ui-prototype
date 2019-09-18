import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotWizstepPropsComponent } from './plot-wizstep-props.component';

describe('PlotWizstepPropsComponent', () => {
  let component: PlotWizstepPropsComponent;
  let fixture: ComponentFixture<PlotWizstepPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotWizstepPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotWizstepPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
