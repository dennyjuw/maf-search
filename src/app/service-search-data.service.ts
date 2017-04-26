import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ServiceSearchDataService {

  providerData: Observable<string>;
  private observer: Observer<string>;

  selectedProviderId: Observable<number>;
  private selectedProviderObserver: Observer<number>;

  constructor() { 
    this.providerData = new Observable<string>(observer => this.observer = observer).share();
    this.selectedProviderId = new Observable<number>(observer => this.selectedProviderObserver = observer).share();
  }

  insertProviderData(newData: string){
    // this.filterData = (data);
    // console.log(data);
    if (this.observer !== undefined) this.observer.next(newData);
  }

  insertProviderId(newData: number) {
    if (this.selectedProviderObserver !== undefined) this.selectedProviderObserver.next(newData);
  }
}
