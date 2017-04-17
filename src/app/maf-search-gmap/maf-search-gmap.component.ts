import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maf-search-gmap',
  templateUrl: './maf-search-gmap.component.html',
  styleUrls: ['./maf-search-gmap.component.scss']
})
export class MafSearchGmapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
