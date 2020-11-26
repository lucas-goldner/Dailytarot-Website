import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css'],
})
export class PageThreeComponent implements OnInit {
  isTouch: any;

  constructor() {}

  isTouchDevice() {
    var el = document.createElement('div');
    el.setAttribute('ontouchstart', 'return;');
    this.isTouch = typeof el.ontouchstart === 'function';
  }

  ngOnInit(): void {
    this.isTouchDevice();
  }
}
