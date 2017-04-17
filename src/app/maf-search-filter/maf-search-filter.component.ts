import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maf-search-filter',
  templateUrl: './maf-search-filter.component.html',
  styleUrls: ['./maf-search-filter.component.scss']
})
export class MafSearchFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('search clicked');
    // console.log(this.suburb);
  }
}
