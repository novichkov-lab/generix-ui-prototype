import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrickDimensionComponent } from './brick-dimension.component';

describe('BrickDimensionComponent', () => {
  let component: BrickDimensionComponent;
  let fixture: ComponentFixture<BrickDimensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrickDimensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrickDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
