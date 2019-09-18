import { Component, OnInit, Input } from '@angular/core';
import { Brick, DimensionVariable } from '../data-provider.service';

@Component({
  selector: 'app-uploader-wizstep-brick-validate',
  templateUrl: './uploader-wizstep-brick-validate.component.html',
  styleUrls: ['./uploader-wizstep-brick-validate.component.css']
})
export class UploaderWizstepBrickValidateComponent implements OnInit {
  @Input()
  brick: Brick;


  constructor() { }

  ngOnInit() {
  }
}
