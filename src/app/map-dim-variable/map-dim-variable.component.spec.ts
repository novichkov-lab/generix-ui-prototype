import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDimVariableComponent } from './map-dim-variable.component';

describe('MapDimVariableComponent', () => {
  let component: MapDimVariableComponent;
  let fixture: ComponentFixture<MapDimVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDimVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDimVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
