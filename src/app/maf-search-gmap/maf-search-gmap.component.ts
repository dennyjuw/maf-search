import { Component, OnInit } from '@angular/core';
import { ServiceSearchDataService } from '../service-search-data.service';

@Component({
  selector: 'app-maf-search-gmap',
  templateUrl: './maf-search-gmap.component.html',
  styleUrls: ['./maf-search-gmap.component.scss']
})
export class MafSearchGmapComponent implements OnInit {

  suburb: string = '';
  lat: number = 51.678418;
  lng: number = 7.809007;
  providerMarker;

  providerData;
  subscription;

  selectedProviderId;
  selectedProviderSubscription;

  constructor(private _serviceSearchDataService: ServiceSearchDataService) {
  }

  ngOnInit() {
    this.subscription = this._serviceSearchDataService.providerData.subscribe(providerData => {
      this.providerData = JSON.parse(providerData);
      console.log(providerData);
      this.lat = this.providerData.lat;
      this.lng = this.providerData.lng;
      this.providerMarker = this.providerData.providers;
    });

    this.selectedProviderSubscription = this._serviceSearchDataService.selectedProviderId.subscribe(providerId => {
      this.selectedProviderId = providerId;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.selectedProviderSubscription.unsubscribe();
  }
}
