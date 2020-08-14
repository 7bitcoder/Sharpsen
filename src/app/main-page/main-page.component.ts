import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
declare var VANTA;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ transform: 'translateX(10%)' })),
      state('*', style({transform: 'translateX(10%)' })),
      transition('void <=> *', [
        animate('1s')
      ])
    ]),
    trigger('fadeInOut', [
      state('void', style({ opacity: '0' })),
      state('*', style({opacity: '1' })),
      transition('void <=> *', [
        animate('1s')
      ])
    ]),
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
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
