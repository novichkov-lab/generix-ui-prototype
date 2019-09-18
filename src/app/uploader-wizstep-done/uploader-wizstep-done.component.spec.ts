import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepDoneComponent } from './uploader-wizstep-done.component';

describe('UploaderWizstepDoneComponent', () => {
  let component: UploaderWizstepDoneComponent;
  let fixture: ComponentFixture<UploaderWizstepDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
