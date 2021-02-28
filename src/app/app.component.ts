import { Component } from '@angular/core';
import {RaceService} from "./race/RaceService.service";
import {RaceServiceWithHttp} from "./race/RaceServiceWithHttp";

@Component({
  //****init version
  // selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.sass']
  //*****include in template html
  selector: 'app-root',
  templateUrl: './app.component.html'
  //*****include inside component without html
  // template: `
// <app-ponies></app-ponies>

})
export class AppComponent {

  constructor(private raceService: RaceServiceWithHttp) {
  }
  title = 'example-app';
  numberOfUsers = 145;
  user: any ;

  list(){
    return this.raceService.list(1);
  }

  onNewRace(): void {

  }
}
