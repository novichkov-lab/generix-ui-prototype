import { Component, OnInit } from '@angular/core';
import { DataProviderService, SearchBuilder, SearchResult } from '../data-provider.service';



@Component({
  selector: 'app-search-wizard',
  templateUrl: './search-wizard.component.html',
  styleUrls: ['./search-wizard.component.css']
})
export class SearchWizardComponent implements OnInit {
  step = 1;
  searchBuilder: SearchBuilder = new SearchBuilder();
  searchResult: SearchResult = null;
  
  constructor(private _service: DataProviderService) { 
    this.searchBuilder.createCriterionHas();
  }


  ngOnInit() {
  }

  clickPrev() {
    this.searchResult = null;
    this.step--;
  }
  clickNext() {
    this.step++;
    console.log(this.step);
  }  

  clickSearch(){
    console.log("Do search");
    this.step++;

    this.searchBuilder.status = 'Submit';
    this._service.doSearch(this.searchBuilder).then(result => {    
      let res = JSON.parse(result['res']);
      this.searchResult = new SearchResult(res, this.searchBuilder);
      // this.brick.id = result['brick_id']
      // this.brick.createStatus = result['status']
      // this.step++;
      console.log(this.step);
      console.log(result);
    });
  }
}
