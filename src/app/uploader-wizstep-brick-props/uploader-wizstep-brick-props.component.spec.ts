import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizstepBrickPropsComponent } from './uploader-wizstep-brick-props.component';

describe('UploaderWizstepBrickPropsComponent', () => {
  let component: UploaderWizstepBrickPropsComponent;
  let fixture: ComponentFixture<UploaderWizstepBrickPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizstepBrickPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizstepBrickPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
