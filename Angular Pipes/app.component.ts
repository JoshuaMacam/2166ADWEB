import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  jsonData = { id: 'home', name: { username: 'main1' }};
  collection: string[] = ['a', 'b', 'c', 'd'];
  str: string = 'abcdefghij';
  a: number = 0.999;
  b: number = 2.999;
  x = 1000;
  y = 3.14159265359;
  time$: Observable<Date>;
  title = 'midterm';
  presentDate = new Date(); 
  constructor() {
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
}
