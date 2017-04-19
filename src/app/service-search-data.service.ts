import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ServiceSearchDataService {

  providerData: Observable<string>;
  private observer: Observer<string>;

  constructor() { 
    this.providerData = new Observable<string>(observer => this.observer = observer).share();
  }

  insertData(newData: string){
    // this.filterData = (data);
    // console.log(data);
    if (this.observer !== undefined) this.observer.next(newData);
  }
}
