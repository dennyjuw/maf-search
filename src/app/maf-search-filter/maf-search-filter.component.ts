import { Component, OnInit } from '@angular/core';
import { ServiceSearchDataService } from '../service-search-data.service';

@Component({
  selector: 'app-maf-search-filter',
  templateUrl: './maf-search-filter.component.html',
  styleUrls: ['./maf-search-filter.component.scss']
})
export class MafSearchFilterComponent implements OnInit {

  suburb = '';
  checkbox1 = true;
  checkbox2 = false;
  checkbox3 = true;

  constructor(private _serviceSearchDataService: ServiceSearchDataService) { 
  }

  ngOnInit() {
  }

  search() {
    console.log('search clicked');
    this._serviceSearchDataService.insertData(this.suburb);
  }
}
