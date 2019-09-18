import { Component, OnInit, Input } from '@angular/core';
import { DataProviderService, SearchBuilder } from '../data-provider.service';

@Component({
  selector: 'app-search-wizstep-type',
  templateUrl: './search-wizstep-type.component.html',
  styleUrls: ['./search-wizstep-type.component.css']
})
export class SearchWizstepTypeComponent implements OnInit {
  @Input()  
  searchBuilder: SearchBuilder;

  dataTypes  = [];
  loaded = false;

  constructor(private _service: DataProviderService) {    
    _service.getCoreTypes().subscribe(res => {
      console.log("From constructor, ctypes loaded: ", res);
      let ctypes: any[] = res['results'];

      // this.dataTypes.push({id:'Brick', text:'Brick'});

      for(let i = 0; i < ctypes.length; i++ ){
        let ctype: String = ctypes[i]['type'];
        this.dataTypes.push({id:ctype, text:ctype});

      }
      console.log("dataTypes:", this.dataTypes);
      this.loaded = true;
    });
  }

  ngOnInit() {
  }
  onDataTypeSelect($event: any){
    console.log("onDataTypeSelect: dataType = ", this.searchBuilder.dataType);
  }
}
