import { Component, OnInit } from '@angular/core';
import { ServiceSearchDataService } from '../service-search-data.service';

@Component({
  selector: 'app-maf-provider-detail',
  templateUrl: './maf-provider-detail.component.html',
  styleUrls: ['./maf-provider-detail.component.scss']
})
export class MafProviderDetailComponent implements OnInit {

  providerData;
  subscription;

  constructor(private _serviceSearchDataService: ServiceSearchDataService) { }

  ngOnInit() {
    this.subscription = this._serviceSearchDataService.providerData.subscribe(providerData => {
      this.providerData = JSON.parse(providerData).providers;
      console.log(this.providerData);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
