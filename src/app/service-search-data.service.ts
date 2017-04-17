import { Injectable } from '@angular/core';

@Injectable()
export class ServiceSearchDataService {

  filterData:string[] = ['a'];

  constructor() { }

  insertData(data: string){
    this.filterData.unshift(data);
    console.log(data);
  }

}
