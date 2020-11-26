import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css'],
})
export class PageFourComponent implements OnInit {
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
