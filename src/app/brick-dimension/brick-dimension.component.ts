import { Component, OnInit, Input } from '@angular/core';
import { BrickDimension, DimensionVariable } from '../data-provider.service';

@Component({
  selector: 'app-brick-dimension',
  templateUrl: './brick-dimension.component.html',
  styleUrls: ['./brick-dimension.component.css']
})
export class BrickDimensionComponent implements OnInit {
  @Input()
  brickDimension: BrickDimension;

  constructor() {}

  ngOnInit() {}

  deleteDimension() {
    console.log('deleteDimension');
    this.brickDimension.delete();
  }

  addVariable() {
    let dimVariable: DimensionVariable;
    dimVariable = new DimensionVariable(this.brickDimension);
    this.brickDimension.variables.push(dimVariable);
  }
}
