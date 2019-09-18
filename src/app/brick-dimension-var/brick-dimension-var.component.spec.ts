import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickDimensionVarComponent } from './brick-dimension-var.component';

describe('BrickDimensionVarComponent', () => {
  let component: BrickDimensionVarComponent;
  let fixture: ComponentFixture<BrickDimensionVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickDimensionVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickDimensionVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
