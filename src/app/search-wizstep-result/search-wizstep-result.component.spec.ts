import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWizstepResultComponent } from './search-wizstep-result.component';

describe('SearchWizstepResultComponent', () => {
  let component: SearchWizstepResultComponent;
  let fixture: ComponentFixture<SearchWizstepResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWizstepResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWizstepResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
