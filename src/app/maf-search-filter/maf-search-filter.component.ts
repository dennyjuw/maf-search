import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maf-search-filter',
  templateUrl: './maf-search-filter.component.html',
  styleUrls: ['./maf-search-filter.component.scss']
})
export class MafSearchFilterComponent implements OnInit {

  suburb = 'aa';
  checkbox1 = true;
  checkbox2 = false;
  checkbox3 = true;

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('search clicked');
    // console.log(this.suburb);
  }
}
