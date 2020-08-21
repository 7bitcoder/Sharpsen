import { Component, OnInit, Input, HostBinding, HostListener, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, sequence, group, animateChild } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser'
import * as firebase from 'firebase'

@Component({
  selector: 'app-presentation-element',
  templateUrl: './presentation-element.component.html',
  styleUrls: ['./presentation-element.component.css'],
  animations: [
    trigger('backgroundIn', [
      state('void', style({ transform: 'translateX(-100vw)' })),
      state('*', style({ transform: 'translateX(-100vw)' })),
      state('show', style({ transform: 'translateX(0vw) skewX(0deg)' })),
      transition('* <=> show',
        group([
          query('@imageIn', animateChild()),
          query('@textIn', animateChild()),
          sequence([
            animate('0.25s ease-in', style({ transform: 'translateX(-50vw) skewX(40deg)' })),
            animate('0.25s ease-out', style({ transform: 'translateX(0vw) skewX(0deg)' }))
          ])
        ])
      ),
    ]),
    trigger('imageIn', [
      state('void', style({ transform: 'translateX(-100vw)' })),
      state('*', style({ transform: 'translateX(-100vw)' })),
      state('show', style({ transform: 'translateX(0vw)' })),
      transition('* <=> show',
        animate('0.5s 0.5s ease-in-out'),
      )
    ]),
    trigger('textIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      transition('* <=> show',
        animate('0.5s 1s ease-in-out'),
      )
    ])
  ]
})

export class PresentationElementComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() id: number;
  @Input() imageLink: string;
  @Input() githubLink: string;
  @Input() index: number;
  @Input() downloads: { platform: string, link: string }[];
  @Input() toolsImg: { decription: string, img: string }[];
  @Input() requirements: string;
  autoplayVideo: string = "false";

  public animatePage = false;

  constructor(public el: ElementRef, private sanitizer: DomSanitizer) { }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.animatePage) {
      const componentPosition = this.el.nativeElement.offsetTop + window.innerHeight * 0.7 //* (this.index + 1.9)
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.animatePage = true;
        this.autoplayVideo = "autoplay";
      }
    }
  }

  ngOnInit(): void { }

  getYtLink() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageLink);
  }
}
