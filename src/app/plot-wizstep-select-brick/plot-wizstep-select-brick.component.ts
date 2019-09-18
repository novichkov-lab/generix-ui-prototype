import { Component, OnInit,Input } from '@angular/core';

import { PlotBuilder, DataProviderService } from '../data-provider.service';


@Component({
  selector: 'app-plot-wizstep-select-brick',
  templateUrl: './plot-wizstep-select-brick.component.html',
  styleUrls: ['./plot-wizstep-select-brick.component.css']
})
export class PlotWizstepSelectBrickComponent implements OnInit {
  @Input()
  plotBuilder: PlotBuilder;
  
  constructor() { }

  ngOnInit() {
  }

}
