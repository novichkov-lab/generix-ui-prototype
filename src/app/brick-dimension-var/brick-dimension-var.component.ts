import { Component, OnInit, Input } from '@angular/core';
import { DimensionVariable } from '../data-provider.service';

@Component({
  selector: 'app-brick-dimension-var',
  templateUrl: './brick-dimension-var.component.html',
  styleUrls: ['./brick-dimension-var.component.css']
})
export class BrickDimensionVarComponent implements OnInit {
  @Input()
  dimensionVariable: DimensionVariable;

  constructor() {}

  ngOnInit() {}

  deleteVariable() {
    this.dimensionVariable.delete();
  }
}
