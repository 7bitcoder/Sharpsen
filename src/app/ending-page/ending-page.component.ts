import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var VANTA;
@Component({
  selector: 'app-ending-page',
  templateUrl: './ending-page.component.html',
  styleUrls: ['./ending-page.component.css']
})
export class EndingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    VANTA.NET({
      el: "#Ebackground",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x2ff00,
      backgroundColor: 0x222222,
      points: 8.00,
      maxDistance: 19.00,
      spacing: 14.00,
      showDots: false
    })
  }

}
