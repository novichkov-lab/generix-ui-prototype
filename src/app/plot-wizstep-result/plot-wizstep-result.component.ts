import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plot-wizstep-result',
  templateUrl: './plot-wizstep-result.component.html',
  styleUrls: ['./plot-wizstep-result.component.css']
})
export class PlotWizstepResultComponent implements OnInit {
  @Input()
  graphData: any;

  constructor() { }

  ngOnInit() {
  }

}
