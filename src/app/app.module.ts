import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceComponent } from './race/race.component';
import { PoniesComponent } from './ponies/ponies.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    PoniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
