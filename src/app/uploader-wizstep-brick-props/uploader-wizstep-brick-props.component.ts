import { Component, OnInit, Input } from '@angular/core';
import { Brick, BrickDimension, TypedProperty, Term, DataProviderService } from '../data-provider.service';

declare var $: any;


@Component({
  selector: 'app-uploader-wizstep-brick-props',
  templateUrl: './uploader-wizstep-brick-props.component.html',
  styleUrls: ['./uploader-wizstep-brick-props.component.css']
})
export class UploaderWizstepBrickPropsComponent implements OnInit {
  propUnits: any[];
  propTypes: any[];
  service: DataProviderService;

  
  @Input()
  brick: Brick;

  constructor(_service: DataProviderService) {
    this.service = _service;
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }

  ngOnInit() {
  }

  addProperty() {
    let props: any[];
    this.brick.createProperty();
  }

  deleteProperty(prop: TypedProperty) {
    prop.delete();
  }

}
