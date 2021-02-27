import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.sass']
  selector: 'app-root',
  template: `
<h1>PonyRacer</h1>
<h2>{{ user?.name }}</h2>
<app-race (newRaceAvailable)="onNewRace()"></app-race>
`
})
export class AppComponent {
  title = 'example-app';
  numberOfUsers = 145;
  user: any ;

  onNewRace(): void {

  }
}
