import { Component, OnInit } from '@angular/core';
import { ServiceSearchDataService } from '../service-search-data.service';

@Component({
  selector: 'app-maf-search-filter',
  templateUrl: './maf-search-filter.component.html',
  styleUrls: ['./maf-search-filter.component.scss']
})
export class MafSearchFilterComponent implements OnInit {

  suburb = '';

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

  providerData = {
    lat: 49.178418,
    lng: 7.609007,
    providers: [
      {
        id: 429123,
        name: 'provider 1',
        lat: 49.378418,
        lng: 7.609007,
        description: 'Text description for provider 1'
      },
      {
        id: 998342,
        name: 'provider 2',
        lat: 49.678418,
        lng: 7.609007,
        description: 'Text description for provider 2'
      },
      {
        id: 241887,
        name: 'provider 3',
        lat: 49.878418,
        lng: 7.609007,
        description: 'Text description for provider 3'
      },
      {
        id: 105831,
        name: 'provider 4',
        lat: 49.778418,
        lng: 7.709007,
        description: 'Text description for provider 4'
      }
    ]
  };

  constructor(private _serviceSearchDataService: ServiceSearchDataService) {
  }

  ngOnInit() {
  }

  search() {
    console.log('search clicked');
    this._serviceSearchDataService.insertProviderData(JSON.stringify(this.providerData));
  }
}
