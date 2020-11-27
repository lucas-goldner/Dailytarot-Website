import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.component.html',
  styleUrls: ['./page-five.component.css'],
})
export class PageFiveComponent implements OnInit {
  mobHeight: any;
  height: any;

  constructor() {
    this.mobHeight = window.screen.height + 'px';
    this.height = window.screen.height * (2 / 3) + 'px';
  }

  ngOnInit(): void {}
}
