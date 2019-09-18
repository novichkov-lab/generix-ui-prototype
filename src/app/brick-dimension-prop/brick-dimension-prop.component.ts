import { Component, OnInit, Input } from '@angular/core';
import { TypedProperty } from '../data-provider.service';

@Component({
  selector: 'app-brick-dimension-prop',
  templateUrl: './brick-dimension-prop.component.html',
  styleUrls: ['./brick-dimension-prop.component.css']
})
export class BrickDimensionPropComponent implements OnInit {
  @Input()
  typedProperty: TypedProperty;

  constructor() {}

  ngOnInit() {}

  deleteProperty() {
    this.typedProperty.delete();
  }
}
