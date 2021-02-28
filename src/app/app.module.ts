import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RaceComponent} from './race/race.component';
import {PoniesComponent} from './ponies/ponies.component';
import {ApiService} from "./api/ApiService.service";
import {RaceServiceWithHttp} from "./race/RaceServiceWithHttp";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    PoniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService,RaceServiceWithHttp
    //**** use a fakeService
    // {provide: RaceService, useClass: RaceServiceWithHttp}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
