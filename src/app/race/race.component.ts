import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.sass']
})
export class RaceComponent implements OnInit {

  constructor() { }

  races: any = [];

  ngOnInit(): void {
  }


  refreshRaces() {
    this.races = [{ name: 'London' }, { name: 'Lyon' }];
  }

}
