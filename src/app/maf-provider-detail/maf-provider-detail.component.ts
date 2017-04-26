import { Component, OnInit } from '@angular/core';
import { ServiceSearchDataService } from '../service-search-data.service';

@Component({
  selector: 'app-maf-provider-detail',
  templateUrl: './maf-provider-detail.component.html',
  styleUrls: ['./maf-provider-detail.component.scss']
})
export class MafProviderDetailComponent implements OnInit {

  providerData = [];
  subscription;
  firstSearch: boolean = false;
  selectedProviderId: number;

  constructor(private _serviceSearchDataService: ServiceSearchDataService) { }

  ngOnInit() {
    this.subscription = this._serviceSearchDataService.providerData.subscribe(providerData => {
      this.providerData = JSON.parse(providerData).providers;
      console.log(this.providerData);
      this.firstSearch = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public selectProvider(providerId: number) {
    this.selectedProviderId = providerId;
    this._serviceSearchDataService.insertProviderId(providerId);
  }
}
