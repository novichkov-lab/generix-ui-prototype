import { Component, OnInit, Input } from '@angular/core';
import { Term, DataProviderService } from '../data-provider.service';

declare var require: any;
const $ = require('jquery');

let _config = new Map();

export class Query{
  $element: any;
  constructor (decorated, $element, options) {
    decorated.call(this, $element, options);
    this.$element = $element;
  }
 
  query = function (params, callback) {

    let $parent = $(this.$element[0].parentElement);
    let elen_id = $parent.attr('id');
    let options = _config.get(elen_id)['options'];
    let service = _config.get(elen_id)['service'];
    let method = _config.get(elen_id)['method'];

    let data = [];
    service[method](params.term).subscribe(res => {
        let items = res['results'];
      for(let i = 0 ; i < items.length; i++){
        data.push(items[i]);
        options.push(items[i]);  
      }
      callback({ results:data})    
    });     
  };    
}



@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.css']
})
export class SelectSearchComponent implements OnInit {

  uiid : String = 'val-' + Math.random().toString();
  options = [];
  settings = {query: Query}

  @Input()
  term: Term;

  @Input()
  searchMethod: any;

  constructor(private _service: DataProviderService) {
  }

  ngOnInit() {      
    _config.set(this.uiid, {
      'options': this.options,
      'service': this._service,
      'method': this.searchMethod
    });

    if(this.term.id){
      this.options.push({
        id:this.term.id,
        text:this.term.name
      })  
    }
  }

  onTypeSelect(event){
    this.term.name = event.text;
  }


}
