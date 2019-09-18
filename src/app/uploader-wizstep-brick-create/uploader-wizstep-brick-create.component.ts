import { Component, OnInit, Input } from '@angular/core';
import { Brick } from '../data-provider.service';

@Component({
  selector: 'app-uploader-wizstep-brick-create',
  templateUrl: './uploader-wizstep-brick-create.component.html',
  styleUrls: ['./uploader-wizstep-brick-create.component.css']
})
export class UploaderWizstepBrickCreateComponent implements OnInit {
  @Input()
  brick: Brick;
  
  constructor() { }

  ngOnInit() {
  }

}
