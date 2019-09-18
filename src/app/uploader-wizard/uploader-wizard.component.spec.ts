import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderWizardComponent } from './uploader-wizard.component';

describe('UploaderWizardComponent', () => {
  let component: UploaderWizardComponent;
  let fixture: ComponentFixture<UploaderWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaderWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
