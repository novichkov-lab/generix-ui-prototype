import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickTypeComponent } from './uploader-wizstep-brick-type.component';

describe('UploaderWizstepBrickTypeComponent', () => {
  let component: UploaderWizstepBrickTypeComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
