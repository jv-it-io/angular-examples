import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.sass']
})
export class PoniesComponent implements OnInit {

  constructor() { }

  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

  ngOnInit(): void {
  }


  refreshPonies() {
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
  }

}
