import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWizstepTypeComponent } from './search-wizstep-type.component';

describe('SearchWizstepTypeComponent', () => {
  let component: SearchWizstepTypeComponent;
  let fixture: ComponentFixture<SearchWizstepTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWizstepTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWizstepTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
