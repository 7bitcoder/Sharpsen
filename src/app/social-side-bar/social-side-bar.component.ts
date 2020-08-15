import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-social-side-bar',
  templateUrl: './social-side-bar.component.html',
  styleUrls: ['./social-side-bar.component.css'],
  animations: [
    trigger('showSocials', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({transform: 'translateX(100%)' })),
      state('showed', style({transform: 'translateX(100% - 100px)' })),
      transition('* <=> showed', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]
})
export class SocialSideBarComponent implements OnInit {
  public sh = false;
  constructor() { }

  ngOnInit(): void {
  }

  show(): void{
    this.sh = true;
  }

  hide(): void{
    this.sh = false;
  }
}
