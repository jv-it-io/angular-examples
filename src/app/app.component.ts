import {Component} from '@angular/core';
import {RaceServiceWithHttp} from "./race/RaceServiceWithHttp";
import {HttpResponse} from "@angular/common/http";
import {IRace, Race} from "./model/Race";

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
  race: IRace = {};
  races: IRace[] = [];


  list(): void{
    this.raceService.list('1').subscribe(
      (res: HttpResponse<IRace>) => {
        if (res) {
           this.race = res.body ? res.body : new Race();
        }
      },
      () => (this.race = {})
    );
    // return this.poney;
    // return this.raceService.list(1);
  }

  getAll(): void {
    this.raceService.findAll().subscribe(
      (res: HttpResponse<IRace[]>) =>
      {
        if(res){
          this.races = res.body ? res.body : [];
        }
      },
      () => (this.races = [])


    )
  }
}
