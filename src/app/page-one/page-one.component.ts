import { Component, OnInit } from '@angular/core';

export interface Tile {
  cols: number;
  text: string;
}

export interface Tile2 {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
})
export class PageOneComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'DailyTarot', cols: 3 },
    { text: 'About', cols: 1 },
    { text: 'Features', cols: 1 },
    { text: 'Download', cols: 1 },
    { text: 'Contact', cols: 1 },
  ];

  tiles2: Tile2[] = [
    { text: 'One', cols: 1, rows: 5 },
    { text: 'Two', cols: 1, rows: 5 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
