import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickValidateComponent } from './uploader-wizstep-brick-validate.component';

describe('UploaderWizstepBrickValidateComponent', () => {
  let component: UploaderWizstepBrickValidateComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
