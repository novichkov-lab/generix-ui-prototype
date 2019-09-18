import { Component, OnInit } from '@angular/core';
import { SearchResult, DataProviderService, SearchBuilder } from '../data-provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchResult:SearchResult = null;

  reports: String[] = [
    'brick_types', 'brick_dim_types', 'brick_data_var_types',
    'process_types', 'process_persons', 'process_campaigns'
  ];

  constructor(private _service: DataProviderService) { }

  ngOnInit() {
  }

  showReport(name:String){

    this._service.doReport(name).subscribe(result => {
      let res = JSON.parse(result['res']);
      let searchBuilder = new SearchBuilder();
      searchBuilder.dataType = "Report " + name + " result";

      this.searchResult = new SearchResult(res, searchBuilder);
    });
  }

}
