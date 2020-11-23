import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

export interface Tile {
  cols: number;
  text: string;
  class: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
})
export class PageOneComponent implements OnInit {
  mobHeight: any;
  mobWidth: any;
  isTouch: any;

  tiles: Tile[] = [
    { text: 'DailyTarot', cols: 2, class: 'navTitle' },
    { text: 'About', cols: 1, class: 'navText' },
    { text: 'Features', cols: 1, class: 'navText' },
    { text: 'Download', cols: 1, class: 'navText' },
    { text: 'Contact', cols: 1, class: 'navText' },
  ];

  constructor() {
    this.mobHeight = window.screen.height - 100 + 'px';
    this.mobWidth = window.screen.width + 'px';
    console.log(this.mobHeight);
  }

  isTouchDevice() {
    var el = document.createElement('div');
    el.setAttribute('ontouchstart', 'return;');
    this.isTouch = typeof el.ontouchstart === 'function';
    console.log(this.isTouch);
  }

  ngOnInit(): void {
    this.isTouchDevice();
  }
}
