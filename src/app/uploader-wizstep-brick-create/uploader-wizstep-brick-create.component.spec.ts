import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickCreateComponent } from './uploader-wizstep-brick-create.component';

describe('UploaderWizstepBrickCreateComponent', () => {
  let component: UploaderWizstepBrickCreateComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
