import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelect2Component } from './custom-select2.component';

describe('CustomSelect2Component', () => {
  let component: CustomSelect2Component;
  let fixture: ComponentFixture<CustomSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
