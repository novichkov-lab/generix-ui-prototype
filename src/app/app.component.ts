import { Component } from '@angular/core';

enum ActiveComponent {
  Home = 0, Upload = 1, Search = 2, Dashboard = 3, Plot = 4
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ENIGMA Data Clearinghouse';
  activeComponent: ActiveComponent = ActiveComponent.Home;


  onHomeClick(event){
    this.activeComponent = ActiveComponent.Home;
  }

  isActiveHome(){
    return this.activeComponent == ActiveComponent.Home;
  }
  activeClassHome(){
    return this.isActiveHome() ? "active" : "";
  }


  onUploadClick(event){
    this.activeComponent = ActiveComponent.Upload;
  }

  isActiveUpload(){
    return this.activeComponent == ActiveComponent.Upload;
  }
  activeClassUpload(){
    return this.isActiveUpload() ? "active" : "";
  }

  onSearchClick(event){
    this.activeComponent = ActiveComponent.Search;
  }

  isActiveSearch(){
    return this.activeComponent == ActiveComponent.Search;
  }
  activeClassSearch(){
    return this.isActiveSearch() ? "active" : "";
  }

  onDashboardClick(event){
    this.activeComponent = ActiveComponent.Dashboard;
  }

  isActiveDashboard(){
    return this.activeComponent == ActiveComponent.Dashboard;
  }
  activeClassDashboard(){
    return this.isActiveDashboard() ? "active" : "";
  }

  onPlotClick(event){
    this.activeComponent = ActiveComponent.Plot;
  }

  isActivePlot(){
    return this.activeComponent == ActiveComponent.Plot;
  }
  activeClassPlot(){
    return this.isActivePlot() ? "active" : "";
  }

  

}
