import { Injectable } from '@angular/core';

@Injectable()
export class ServiceSearchDataService {

  filterData:object = [];

  constructor() { }

  insertData(data: object){
    this.filterData = (data);
    console.log(data);
  }

}
