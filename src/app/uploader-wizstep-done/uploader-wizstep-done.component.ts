import { Component, OnInit, Input } from '@angular/core';
import { Brick } from '../data-provider.service';

@Component({
  selector: 'app-uploader-wizstep-done',
  templateUrl: './uploader-wizstep-done.component.html',
  styleUrls: ['./uploader-wizstep-done.component.css']
})
export class UploaderWizstepDoneComponent implements OnInit {
  @Input()
  brick: Brick;
  constructor() { }

  ngOnInit() {
  }

}
