import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickDimensionPropComponent } from './brick-dimension-prop.component';

describe('BrickDimensionPropComponent', () => {
  let component: BrickDimensionPropComponent;
  let fixture: ComponentFixture<BrickDimensionPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickDimensionPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickDimensionPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
