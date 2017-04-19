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

  searchQuery = [
    { section: 'Gender',
      options: [
        {name: 'Male', value: 'gender-male', checked: false},
        {name: 'Female', value: 'gender-female', checked: false},
        {name: 'Other', value: 'gender-other', checked: false}
      ]
    },
    { section: 'Background checks',
      options: [
        {name: 'Passport', value: 'background-passport', checked: false},
        {name: 'National Police Criminal Records Check', value: 'background-police', checked: false},
        {name: 'Working with Children Check (WWCC)', value: 'background-wwcc', checked: false},
        {name: 'Working with Vulnerable People Check (WWVPC)', value: 'background-wwvpc', checked: false}
      ]
    },
    { section: 'Other preferences',
      options: [
        {name: 'LGBTI friendly', value: 'pref-lgbti', checked: false},
        {name: 'Pet friendly', value: 'pref-pet', checked: false},
        {name: 'Non smoker', value: 'pref-non-smoker', checked: false}
      ]
    },
    { section: 'Qualifications',
      options: [
        {name: 'Nursing Services', value: 'qualifiation-nursing', checked: false},
        {name: 'Personal Care', value: 'qualification-personal-care', checked: false},
        {name: 'Social & Domestic Assitance', value: 'qualification-social-domestic', checked: false}
      ]
    }
  ];
  

  constructor(private _serviceSearchDataService: ServiceSearchDataService) { 
  }

  ngOnInit() {
  }

  search() {
    console.log('search clicked');
    console.log(this.searchQuery);
    this._serviceSearchDataService.insertData(this.searchQuery);
  }
}
