import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare var VANTA;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('flyInOutLogo', [
      state('void', style({ transform: 'translateX(100vw)' })),
      state('*', style({ transform: 'translateX(0vw)' })),
      transition('void <=> *', [
        animate('1s 1s ease-in-out')
      ])
    ]),
    trigger('flyInOutLanguages', [
      state('void', style({ transform: 'translateX(100vw)' })),
      state('*', style({ transform: 'translateX(0vw)' })),
      transition('void <=> *', [
        animate('1s 2s ease-in-out')
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    VANTA.NET({
      el: "#background",
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
