import { Component, OnInit, Input } from '@angular/core';
import { Brick, BrickDimension, DimensionVariable, DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-uploader-wizstep-brick-map',
  templateUrl: './uploader-wizstep-brick-map.component.html',
  styleUrls: ['./uploader-wizstep-brick-map.component.css']
})
export class UploaderWizstepBrickMapComponent implements OnInit {
  @Input()
  brick: Brick;

  coreProps = new Map();
  coreTypes  = [];
  loaded = false;

  constructor(private _service: DataProviderService) {    
    _service.getCoreTypes().subscribe(res => {
      console.log("From constructor, ctypes loaded: ", res);
      let ctypes: any[] = res['results'];
      for(let i = 0; i < ctypes.length; i++ ){
        let ctype: String = ctypes[i]['type'];
        this.coreTypes.push({id:ctype, text:ctype});

        let props = [];
        for(let j = 0; j < ctypes[i]['props'].length; j++){
          let prop: String = ctypes[i]['props'][j];
          props.push({id:prop, text:prop});
        }
        this.coreProps.set(ctype, props);
      }
      console.log("Coretypes:", this.coreTypes);
      console.log("coreProps:", this.coreProps);
      this.loaded = true;
    });
  }

  onClickMap($event, dimVar: DimensionVariable){
    this._service.mapDimVariable(dimVar).then(result => {
      let res = result['results']
      dimVar.mappedCount = res['mappedCount'];
      dimVar.totalCount = res['totalCount'];
      dimVar.mapped = true;

      // Add or update variable
      let dim: BrickDimension = dimVar.dimension;

      let mVar: DimensionVariable = null;
      for(let i = 0; i < dim.var_count(); i++){
        if( dim.variables[i].type.id == res['type_term']['id'] ){
          mVar = dim.variables[i];
          break;
        }
      }
      if(mVar == null){
        mVar = dim.createVariable();
      }

      mVar.type.id = res['type_term']['id'];
      mVar.type.name = res['type_term']['name'];
      mVar.units.id = '';
      mVar.units.name = '';
      mVar.values = res['values'];
      mVar.valuesSample = mVar.values.slice(0,5).join(', ') + "...";
      mVar.mapPK = true;

      console.log('mapDimVariable:', res);
      console.log('mapDimVariable: dimVar', dimVar);
      
    });
  }  

  ngOnInit() {
  }
  onCoreTypeSelect($event: any, dimVar: DimensionVariable){
    console.log("onCoreTypeSelect: dimVar", dimVar)
    dimVar.mapCoreProp = "";
  }

  onCorePropSelect($event: any, dimVar: DimensionVariable){
    console.log("onCorePropSelect: dimVar", dimVar)
  }
}
