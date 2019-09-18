import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWizardComponent } from './search-wizard.component';

describe('SearchWizardComponent', () => {
  let component: SearchWizardComponent;
  let fixture: ComponentFixture<SearchWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
