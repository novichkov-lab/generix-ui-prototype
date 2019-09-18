import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {Select2Component} from 'angular-select2-component';
import { DataProviderService } from './data-provider.service';
import { HttpModule } from '@angular/http';

import 'bootstrap/dist/css/bootstrap.css';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrickDimensionComponent } from './brick-dimension/brick-dimension.component';
import { BrickDimensionVarComponent } from './brick-dimension-var/brick-dimension-var.component';
import { UploaderWizardComponent } from './uploader-wizard/uploader-wizard.component';
import { UploaderWizstepBrickTypeComponent } from './uploader-wizstep-brick-type/uploader-wizstep-brick-type.component';
import { UploaderWizstepBrickPropsComponent } from './uploader-wizstep-brick-props/uploader-wizstep-brick-props.component';
import { UploaderWizstepBrickDimsComponent } from './uploader-wizstep-brick-dims/uploader-wizstep-brick-dims.component';
import { BrickDimensionPropComponent } from './brick-dimension-prop/brick-dimension-prop.component';
import { SelectSearchComponent } from './select-search/select-search.component';
import { UploaderWizstepBrickLoadComponent } from './uploader-wizstep-brick-load/uploader-wizstep-brick-load.component';
import { UploaderWizstepDoneComponent } from './uploader-wizstep-done/uploader-wizstep-done.component';
import { UploaderWizstepBrickValidateComponent } from './uploader-wizstep-brick-validate/uploader-wizstep-brick-validate.component';
import { UploaderWizstepBrickMapComponent } from './uploader-wizstep-brick-map/uploader-wizstep-brick-map.component';
import { UploaderWizstepBrickCreateComponent } from './uploader-wizstep-brick-create/uploader-wizstep-brick-create.component';
import { MapDimVariableComponent } from './map-dim-variable/map-dim-variable.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchWizstepTypeComponent } from './search-wizstep-type/search-wizstep-type.component';
import { SearchWizardComponent } from './search-wizard/search-wizard.component';
import { SearchWizstepCriteriaComponent } from './search-wizstep-criteria/search-wizstep-criteria.component';
import { SearchWizstepCriteriaHasComponent } from './search-wizstep-criteria-has/search-wizstep-criteria-has.component';
import { SearchWizstepResultComponent } from './search-wizstep-result/search-wizstep-result.component';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { CustomSelect2Component } from './custom-select2/custom-select2.component';
import { PlotWizardComponent } from './plot-wizard/plot-wizard.component';
import { PlotWizstepSelectBrickComponent } from './plot-wizstep-select-brick/plot-wizstep-select-brick.component';
import { PlotWizstepMapAxisComponent } from './plot-wizstep-map-axis/plot-wizstep-map-axis.component';
import { PlotWizstepPropsComponent } from './plot-wizstep-props/plot-wizstep-props.component';
import { PlotWizstepResultComponent } from './plot-wizstep-result/plot-wizstep-result.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    BrickDimensionComponent,
    BrickDimensionVarComponent,
    UploaderWizardComponent,
    UploaderWizstepBrickTypeComponent,
    UploaderWizstepBrickPropsComponent,
    UploaderWizstepBrickDimsComponent,
    BrickDimensionPropComponent,
    // Select2Component,
    SelectSearchComponent,
    UploaderWizstepBrickLoadComponent,
    UploaderWizstepDoneComponent,
    UploaderWizstepBrickValidateComponent,
    UploaderWizstepBrickMapComponent,
    UploaderWizstepBrickCreateComponent,
    MapDimVariableComponent,
    HomeComponent,
    DashboardComponent,
    SearchWizstepTypeComponent,
    SearchWizardComponent,
    SearchWizstepCriteriaComponent,
    SearchWizstepCriteriaHasComponent,
    SearchWizstepResultComponent,
    CustomSelect2Component,
    PlotWizardComponent,
    PlotWizstepSelectBrickComponent,
    PlotWizstepMapAxisComponent,
    PlotWizstepPropsComponent,
    PlotWizstepResultComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule, PlotlyModule],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {}


