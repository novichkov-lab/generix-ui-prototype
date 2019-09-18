import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWizstepCriteriaHasComponent } from './search-wizstep-criteria-has.component';

describe('SearchWizstepCriteriaHasComponent', () => {
  let component: SearchWizstepCriteriaHasComponent;
  let fixture: ComponentFixture<SearchWizstepCriteriaHasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWizstepCriteriaHasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWizstepCriteriaHasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
