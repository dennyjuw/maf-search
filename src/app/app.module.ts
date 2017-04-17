import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule, MdInputModule } from '@angular/material';
// google maps
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { MafSearchToolbarComponent } from './maf-search-toolbar/maf-search-toolbar.component';
import { MafSearchFilterComponent } from './maf-search-filter/maf-search-filter.component';
import { MafSearchGmapComponent } from './maf-search-gmap/maf-search-gmap.component';


@NgModule({
  declarations: [
    AppComponent,
    MafSearchToolbarComponent,
    MafSearchFilterComponent,
    MafSearchGmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZhm-hab7bBO50eDeHhGTdKbl8o0XrXEA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
