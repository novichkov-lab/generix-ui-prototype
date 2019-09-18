import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWizstepCriteriaComponent } from './search-wizstep-criteria.component';

describe('SearchWizstepCriteriaComponent', () => {
  let component: SearchWizstepCriteriaComponent;
  let fixture: ComponentFixture<SearchWizstepCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWizstepCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWizstepCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
