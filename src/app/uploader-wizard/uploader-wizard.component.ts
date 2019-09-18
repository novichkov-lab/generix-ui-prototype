import { Component, OnInit } from '@angular/core';
import { Brick, DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-uploader-wizard',
  templateUrl: './uploader-wizard.component.html',
  styleUrls: ['./uploader-wizard.component.css']
})
export class UploaderWizardComponent implements OnInit {
  step = 1;
  brick: Brick;
  constructor(private _service: DataProviderService) { }


  ngOnInit() {
    this.brick = new Brick();
  }

  clickPrev() {
    this.step--;
  }
  clickNext() {
    this.step++;
    console.log(this.step);
  }
  clickCreate(){
    console.log("Creating brick");

    this.brick.createStatus = 'Creating';
    this._service.createBrick(this.brick).then(result => {
      this.brick.id = result['brick_id']
      this.brick.createStatus = result['status']
      this.step++;
      console.log(this.step);
      console.log(result);
    });

  }
}
