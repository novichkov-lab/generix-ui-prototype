import { Component, OnInit, Input } from '@angular/core';
import { Brick,DataProviderService, BrickDimension, DimensionVariable } from '../data-provider.service';


@Component({
  selector: 'app-uploader-wizstep-brick-load',
  templateUrl: './uploader-wizstep-brick-load.component.html',
  styleUrls: ['./uploader-wizstep-brick-load.component.css']
})
export class UploaderWizstepBrickLoadComponent implements OnInit {
  @Input()
  brick: Brick;

  debug = true;
  uploadedDoc = "";
  documents: any[] = [];
  file: any;

  constructor(private _service: DataProviderService) { }

  ngOnInit() {
  }

  onStartUpload(){
    console.log("onStartUpload");
    let postData = { brick: this.brick.toJson() };

    this._service.postWithFile(postData,this.file).then(result => {
        for(let i = 0; i < this.brick.dimensions.length; i++){
          let dim: BrickDimension = this.brick.dimensions[i];
          let dd: any = result['data'].dims[i];

          for(let j = 0; j < dim.variables.length; j++){
            let dimVar: DimensionVariable = dim.variables[j];
            dimVar.values = dd['vars'][j];
            dimVar.valuesSample = dimVar.values.slice(0,5).join(', ') + "...";
          }
        }  
        this.brick.data_file_name = result['data']['file_name']
        this.uploadedDoc =  result['data']['file_data'].slice(0,1000) + '...';
        console.log(result);
        console.log(this.brick);
    });
  }

  onFileSelect(event){
    this.file = event.srcElement.files;
  }
}
