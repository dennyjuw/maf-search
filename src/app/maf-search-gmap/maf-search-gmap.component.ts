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

  providerData;
  subscription;


  constructor(private _serviceSearchDataService: ServiceSearchDataService) { 
  }

  // ngOnInit() {
  //   // this.suburb = this._serviceSearchDataService.filterData[0];
  //   this.suburb = 'abc';
  // }

  ngOnInit() {

    this.subscription = this._serviceSearchDataService.providerData.subscribe(providerData => {
      this.providerData = JSON.parse(providerData);
      console.log(providerData);
      this.lat = this.providerData.lat;
      this.lng = this.providerData.lng;
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
