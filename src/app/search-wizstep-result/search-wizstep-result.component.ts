import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../data-provider.service';

@Component({
  selector: 'app-search-wizstep-result',
  templateUrl: './search-wizstep-result.component.html',
  styleUrls: ['./search-wizstep-result.component.css']
})
export class SearchWizstepResultComponent implements OnInit {
  @Input()
  searchResult:SearchResult

  constructor() { }

  ngOnInit() {
  }

}
