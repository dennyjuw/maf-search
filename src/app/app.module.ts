import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdCheckboxModule, MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MafSearchToolbarComponent } from './maf-search-toolbar/maf-search-toolbar.component';
import { MafSearchFilterComponent } from './maf-search-filter/maf-search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MafSearchToolbarComponent,
    MafSearchFilterComponent
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
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
