import { Component, OnInit, Input } from '@angular/core';
import { Brick, BrickDimension } from '../data-provider.service';

@Component({
  selector: 'app-uploader-wizstep-brick-dims',
  templateUrl: './uploader-wizstep-brick-dims.component.html',
  styleUrls: ['./uploader-wizstep-brick-dims.component.css']
})
export class UploaderWizstepBrickDimsComponent implements OnInit {
  @Input()
  brick: Brick;

  constructor() {}

  ngOnInit() {}

  addDimension() {
    let dim;
    dim = new BrickDimension(this.brick);
    this.brick.dimensions.push(dim);
  }
}
