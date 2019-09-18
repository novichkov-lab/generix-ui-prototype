import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Util {
  static removeElement(arr: any[], item: any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i].index = i;
    }
  }
}

export class Term{
  id: String;
  name: String;
}

export class TypedProperty {
  parentCollection: TypedProperty[];
  index: number;
  type: Term = new Term();
  value: String;
  units: Term = new Term();

  constructor(parentCollection: TypedProperty[]) {
    this.parentCollection = parentCollection;
    this.index = this.parentCollection.length;
  }

  delete() {
    Util.removeElement(this.parentCollection, this);
  }
}

export class DimensionVariable {
  dimension: BrickDimension;
  index: number;
  type: Term = new Term();
  units: Term = new Term();
  scalarType: String;
  values: any[] = [];
  valuesSample: String;

  mapCoreType: String;
  mapCoreProp: String;
  mappedCount: number;
  totalCount: number;
  mapped: boolean = false;
  mapPK: boolean = false;


  constructor(dimension: BrickDimension) {
    this.dimension = dimension;
    this.index = dimension.var_count();
  }

  size(): number {
    return this.values.length;
  }

  delete() {
    this.dimension.deleteVariable(this);
  }
}

export class BrickDimension {
  brick: Brick;
  index: number;
  type: Term = new Term();
  variables: DimensionVariable[] = [];

  constructor(brick: Brick) {
    this.brick = brick;
    this.index = brick.dim_count();
  }

  size(): number{
    return this.variables.length > 0 ? this.variables[0].size() : 0;
  }

  var_count(): number {
    return this.variables.length;
  }
  createVariable(){
    let dimVar: DimensionVariable = new DimensionVariable(this);
    this.variables.push(dimVar);
    return dimVar;
  }

  delete() {
    this.brick.removeDimension(this);
  }

  deleteVariable(dimensionVariable: DimensionVariable) {
    Util.removeElement(this.variables, dimensionVariable);
  }
}
export class Brick {
  id : String;
  createStatus : String;

  name: String;
  type: String;
  template_id: string;
  template_name: string;
  dimensions: BrickDimension[] = [];
  properties: TypedProperty[] = [];
  data_file_name: String;  


  isStatusCreating(): boolean{
    return this.createStatus == 'Creating';
  }

  toJson(): String{
    let cache = [];
    let res = JSON.stringify(this, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Duplicate reference found
                try {
                    // If this value does not reference a parent it can be deduped
                    return JSON.parse(JSON.stringify(value));
                } catch (error) {
                    // discard key if value cannot be deduped
                    return;
                }
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
    return res;
  }

  dim_count(): number {
    return this.dimensions.length;
  }

  prop_count(): number {
    return this.properties.length;
  }

  createDimension() {
    let dim: BrickDimension = new BrickDimension(this);
    this.dimensions.push(dim);
    return dim;
  }


  createProperty() {
    let prop: TypedProperty;
    prop = new TypedProperty(this.properties);
    this.properties.push(prop);
    return prop;
  }

  removeAllProperties(){
    this.properties = [];
  }
  removeProperty(prop: TypedProperty) {
    Util.removeElement(this.properties, prop);
  }

  removeAllDimensions(){
    this.dimensions = [];
  }
  removeDimension(dim: BrickDimension) {
    Util.removeElement(this.dimensions, dim);
  }
}

export class SearchCriterionHas{
  searchBuilder: SearchBuilder;
  property: String;
  operation: String;
  value: String;

  constructor(searchBuilder: SearchBuilder){
    this.searchBuilder = searchBuilder;
  }

  delete(){
    this.searchBuilder.removeCriterionHas(this);
  }
}


export class SearchResult{
    searchBuilder: SearchBuilder;
    columns: String[];
    data: any[];
    constructor(res: any, searchBuilder: SearchBuilder ){
      this.searchBuilder = searchBuilder;
      this.columns = [];
      let fields = res['schema']['fields'];

      for (let i = 0; i < fields.length; i++){
        this.columns.push(fields[i]['name']);
      }
      this.data = res['data'];
    }
}

export class SearchBuilder {
  status: String = "None";
  dataType : String;
  criteriaHas: SearchCriterionHas[] = [];
  criteriaProcessOutput: SearchCriterionHas[] = [];
  criteriaProcessInput: SearchCriterionHas[] = [];
  criteriaLinkedUp: SearchCriterionHas[] = [];
  criteriaLinkedDown: SearchCriterionHas[] = [];

  createCriterionHas(){
    let criterion: SearchCriterionHas;
    criterion = new SearchCriterionHas(this);
    this.criteriaHas.push(criterion);
    return criterion;    
  }

  createCriterionProcessOutput(){
    let criterion: SearchCriterionHas;
    criterion = new SearchCriterionHas(this);
    this.criteriaProcessOutput.push(criterion);
    return criterion;    
  }

  removeCriterionProcessOutput(criterion: SearchCriterionHas){
    Util.removeElement(this.criteriaProcessOutput, criterion);
  }
  removeCriterionHas(criterion: SearchCriterionHas){
    Util.removeElement(this.criteriaHas, criterion);
  }

  toJson(): String{
    let cache = [];
    let res = JSON.stringify(this, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Duplicate reference found
                try {
                    // If this value does not reference a parent it can be deduped
                    return JSON.parse(JSON.stringify(value));
                } catch (error) {
                    // discard key if value cannot be deduped
                    return;
                }
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    });
    return res;
  }
}

export class PlotConfig {
  name: String;
  n_dim: Number;
  img: String;
}

export class PlotBuilder {
  brick: any;

  brickId: String;
  
  title: String;
  subTitle: String;
  xLabels: any[];
  yLabels: any[];
  zLabels: any[];


}


@Injectable()
export class DataProviderService {
  private baseURL = 'http://127.0.0.1:8081';
  constructor(private http: Http) {}

  getBrickTypeTemplates(): Observable<any> {
    return this.http.get(this.baseURL + '/brick_type_templates').map((res: Response) => {
      return res.json();
    });
  }

  getCoreTypes(): Observable<any> {
    return this.http.get(this.baseURL + '/core_types').map((res: Response) => {
      return res.json();
    });
  }

  getBrick(brickId:String): Observable<any> {
    return this.http.get(this.baseURL + '/brick/' + brickId).map((res: Response) => {
      return res.json();
    });
  }

  searchOntAll(value): Observable<any> {
    return this.http.get(this.baseURL + '/search_ont_all/' + value).map((res: Response) => {
      return res.json();
    });
  }

  searchOntUnits(value): Observable<any> {
    return this.http.get(this.baseURL + '/search_ont_units/' + value).map((res: Response) => {
      return res.json();
    });
  }

  mapDimVariable(dimVar: DimensionVariable){
    let postData = {
      brick : dimVar.dimension.brick.toJson(),
      dimIndex: dimVar.dimension.index,
      dimVarIndex: dimVar.index,
      mapCoreType: dimVar.mapCoreType,
      mapCoreProp: dimVar.mapCoreProp
    };

    let headers = new Headers();
    let formData:FormData = new FormData();
    for (var property in postData) {
      if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
      }
    }

    var returnReponse = new Promise((resolve, reject) => {
      this.http.post(this.baseURL + '/map_dim_variable', formData, {
        headers: headers
      }).subscribe(
          res => {
            resolve(res.json());
          },
          error => {
            // this.router.navigate(['/login']);
            reject(error);
          }
      );
    });
    return returnReponse;
  }

  createBrick(brick: Brick){
    let postData = {brick : brick.toJson()};

    let headers = new Headers();
    let formData:FormData = new FormData();
    for (var property in postData) {
      if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
      }
    }

    var returnReponse = new Promise((resolve, reject) => {
      this.http.post(this.baseURL + '/create_brick', formData, {
        headers: headers
      }).subscribe(
          res => {
            resolve(res.json());
          },
          error => {
            // this.router.navigate(['/login']);
            reject(error);
          }
      );
    });
    return returnReponse;
  }

  doReport(reportName: String): Observable<any> {
    return this.http.get(this.baseURL + '/do_report/' + reportName).map((res: Response) => {
      return res.json();
    });
  }


  doSearch(searchBuilder: SearchBuilder){
    let postData = {searchBuilder : searchBuilder.toJson()};

    let headers = new Headers();
    let formData:FormData = new FormData();
    for (var property in postData) {
      if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
      }
    }

    var returnReponse = new Promise((resolve, reject) => {
      this.http.post(this.baseURL + '/do_search', formData, {
        headers: headers
      }).subscribe(
          res => {
            resolve(res.json());
          },
          error => {
            // this.router.navigate(['/login']);
            reject(error);
          }
      );
    });
    return returnReponse;

  }


  postWithFile(postData: any, files: File[]) {

    let headers = new Headers();
    let formData:FormData = new FormData();
    formData.append('files', files[0], files[0].name);

    if(postData !=="" && postData !== undefined && postData !==null){
      for (var property in postData) {
          if (postData.hasOwnProperty(property)) {
              formData.append(property, postData[property]);
          }
      }
    }
    var returnReponse = new Promise((resolve, reject) => {
      this.http.post(this.baseURL + '/upload', formData, {
        headers: headers
      }).subscribe(
          res => {
            resolve(res.json());
          },
          error => {
            // this.router.navigate(['/login']);
            reject(error);
          }
      );
    });
    return returnReponse;
  }

}
