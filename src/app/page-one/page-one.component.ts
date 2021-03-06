import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

export interface Tile {
  cols: number;
  text: string;
  class: string;
  href: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
})
export class PageOneComponent implements OnInit {
  mobHeight: any;
  mobMobHeight: any;
  mobWidth: any;
  isTouch: any;

  tiles: Tile[] = [
    {
      text: 'DailyTarot',
      cols: 2,
      class: 'navTitle',
      href: '/',
    },
    { text: 'About', cols: 1, class: 'navText', href: '#about' },
    { text: 'Features', cols: 1, class: 'navText', href: '#features' },
    { text: 'Download', cols: 1, class: 'navText', href: '#download' },
    { text: 'Contact', cols: 1, class: 'navText', href: '#contact' },
  ];

  constructor() {
    this.mobHeight = window.screen.height / 6 + 'px';
    this.mobMobHeight = window.screen.height - 258 + 'px';
    this.mobWidth = window.screen.width + 'px';
    console.log(this.mobHeight);
  }

  isTouchDevice() {
    var el = document.createElement('div');
    el.setAttribute('ontouchstart', 'return;');
    this.isTouch = typeof el.ontouchstart === 'function';
  }

  ngOnInit(): void {
    this.isTouchDevice();
  }
}
