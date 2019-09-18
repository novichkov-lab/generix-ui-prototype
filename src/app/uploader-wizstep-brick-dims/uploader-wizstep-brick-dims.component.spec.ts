import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickDimsComponent } from './uploader-wizstep-brick-dims.component';

describe('UploaderWizstepBrickDimsComponent', () => {
  let component: UploaderWizstepBrickDimsComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickDimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickDimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickDimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
