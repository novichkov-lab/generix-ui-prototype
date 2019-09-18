import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickMapComponent } from './uploader-wizstep-brick-map.component';

describe('UploaderWizstepBrickMapComponent', () => {
  let component: UploaderWizstepBrickMapComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
