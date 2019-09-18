import { Component, OnInit } from '@angular/core';
import { DataProviderService, PlotBuilder } from '../data-provider.service';

@Component({
  selector: 'app-plot-wizard',
  templateUrl: './plot-wizard.component.html',
  styleUrls: ['./plot-wizard.component.css']
})
export class PlotWizardComponent implements OnInit {
  step = 1;
  plotBuilder: PlotBuilder = new PlotBuilder();
  graphData: any = null;
  
  constructor(private _service: DataProviderService) {
  }


  ngOnInit() {
  }

  clickPrev() {
    this.graphData = null;
    this.step--;
  }
  clickNext() {
    this.step++;
    console.log(this.step);
  }  

  clickPlot(){
    this._service.getBrick(this.plotBuilder.brickId).subscribe(res => {
      this.plotBuilder.brick = res['res'];
      console.log(this.plotBuilder.brick);

      let bd = this.plotBuilder.brick;
      this.plotBuilder.title =  bd['data_type']['oterm_name'] 
        + ' <' 
        + bd['dim_context'][0]['data_type']['oterm_name'] 
        + '>';
      this.plotBuilder.subTitle = bd['name'];
      this.plotBuilder.xLabels = bd['dim_context'][0]['typed_values'][0]['values']['string_values'];
      this.plotBuilder.yLabels = bd['typed_values'][0]['values']['float_values_values_values'];

      this.buildGraphData();
    });
    this.step++;
  }

  buildGraphData(){
    this.graphData = {
      data: [
        { 
          x: this.plotBuilder.xLabels, 
          y: this.plotBuilder.yLabels, 
          type: 'bar' 
        }
      ],
      layout: {
        autosize: true, 
        title: this.plotBuilder.title + "<br>" + this.plotBuilder.subTitle
      }      
    }
  }
}
