import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickLoadComponent } from './uploader-wizstep-brick-load.component';

describe('UploaderWizstepBrickLoadComponent', () => {
  let component: UploaderWizstepBrickLoadComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
