import { Component, OnInit, Input } from '@angular/core';
import { Brick, DataProviderService, TypedProperty } from '../data-provider.service';



@Component({
  selector: 'app-uploader-wizstep-brick-type',
  templateUrl: './uploader-wizstep-brick-type.component.html',
  styleUrls: ['./uploader-wizstep-brick-type.component.css']
})
export class UploaderWizstepBrickTypeComponent implements OnInit {

  debug = true;
  options: any;  
  templateDoc = "";
  @Input()
  brick: Brick;


  
  constructor(private _service: DataProviderService) {    
    _service.getBrickTypeTemplates().subscribe(res => {
      this.options = res['results'];
      console.log("options from constructor:", this.options);
    });
  }

  ngOnInit() {
    console.log('ngOnInit: template', this.brick.template_id, this.brick.template_name)
  }

  onTemplateSelect(event){
    let templateConfig = null;    

    this.brick.template_name = event.text;
    for(let group of this.options){
      for(let option of group.children){
        if( option['text'] == this.brick.template_name){
          templateConfig = option;
          this.templateDoc = JSON.stringify(option);
          console.log(option);
        }
      }
    }

    // Build brick properties
    this.brick.properties = [];
    for(let propConfig of templateConfig.properties){
      let prop = this.brick.createProperty();
      prop.type.id = propConfig.property.id;
      prop.type.name = propConfig.property.text;
      prop.value = propConfig.value.text;
      prop.units.id = propConfig.units.id;
      prop.units.name = propConfig.units.text;
    }

    // Build brick dimensions
    this.brick.dimensions = [];
    for(let dimConfig of templateConfig.dims){
      let dim = this.brick.createDimension();
      dim.type.id = dimConfig.type.id;
      dim.type.name = dimConfig.type.text;
      for(let dimVarConfig of dimConfig.dim_vars){
        let dimVar = dim.createVariable();
        dimVar.type.id = dimVarConfig.type.id;
        dimVar.type.name = dimVarConfig.type.text;
        dimVar.units.id = dimVarConfig.units.id;
        dimVar.units.name = dimVarConfig.units.text;
        dimVar.scalarType = dimVarConfig.scalar_type.text;
      }
    }


    console.log('event', event)
  }
}
