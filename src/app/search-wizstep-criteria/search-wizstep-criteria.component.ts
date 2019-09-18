import { Component, OnInit, Input } from '@angular/core';
import { DataProviderService, SearchBuilder, SearchCriterionHas } from '../data-provider.service';

@Component({
  selector: 'app-search-wizstep-criteria',
  templateUrl: './search-wizstep-criteria.component.html',
  styleUrls: ['./search-wizstep-criteria.component.css']
})
export class SearchWizstepCriteriaComponent implements OnInit {
  @Input()  
  searchBuilder: SearchBuilder;

  operations: any[];
  props: any[];
  loaded:boolean = false;

  processOutputPorops: any[];

  constructor(private _service: DataProviderService) {    

    this.operations = [];
    this.operations.push({id:"==", text:"equals"});
    this.operations.push({id:"like", text:"like"});
    this.operations.push({id:">", text:">"});
    this.operations.push({id:">=", text:">="});
    this.operations.push({id:"<", text:"<"});
    this.operations.push({id:"<=", text:"<="});

    this.processOutputPorops = [];
    this.processOutputPorops.push({id:'campaign', text:'campaign'});
    this.processOutputPorops.push({id:'person', text:'person'});

    _service.getCoreTypes().subscribe(res => {
      console.log("From constructor, ctypes loaded: ", res);
      let ctypes: any[] = res['results'];
      for(let i = 0; i < ctypes.length; i++ ){
        let ctype: String = ctypes[i]['type'];
        if(ctype == this.searchBuilder.dataType){
          this.props = [];
          for(let j = 0; j < ctypes[i]['props'].length; j++){
            let prop: String = ctypes[i]['props'][j];
            this.props.push({id:prop, text:prop});
          }
          break;
        }
      }
      this.loaded = true;
    });
  }

  ngOnInit() {
  }

  deleteCriterionHas(criterion: SearchCriterionHas){
    criterion.delete();
  }

  addCriterionHas(){
    this.searchBuilder.createCriterionHas();
  }
  addCriterionProcessOutput(){
    this.searchBuilder.createCriterionProcessOutput();
  }
}
