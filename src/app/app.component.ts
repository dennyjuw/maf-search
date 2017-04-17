import { Component } from '@angular/core';
import { ServiceSearchDataService } from './service-search-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ServiceSearchDataService]
})
export class AppComponent {
  title = 'app works!';
}
