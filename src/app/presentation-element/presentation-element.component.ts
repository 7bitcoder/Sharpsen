import { Component, OnInit, Input, HostBinding, HostListener, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, sequence, group, animateChild } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-presentation-element',
  templateUrl: './presentation-element.component.html',
  styleUrls: ['./presentation-element.component.css'],
  animations: [
    trigger('backgroundIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      state('*', style({ transform: 'translateX(-100%)' })),
      state('show', style({ transform: 'translateX(0) skewX(0deg)' })),
      transition('* <=> show',
        sequence([
          animate('0.25s ease-in', style({ transform: 'translateX(-50%) skewX(40deg)' })),
          animate('0.25s ease-out', style({ transform: 'translateX(0) skewX(0deg)' })),
          query('@imageIn', animateChild()),
          query('@textIn', animateChild()),
        ])
      ),
    ]),
    trigger('imageIn', [
      state('void', style({ transform: 'translateX(-150%)' })),
      state('*', style({ transform: 'translateX(-150%)' })),
      state('show', style({ transform: 'translateX(0)' })),
      transition('* <=> show',
        animate('0.5s ease-in-out'),
      )
    ]),
    trigger('textIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      transition('* <=> show',
        animate('0.5s ease-in-out'),
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
  safeUrl: any = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  @Input() downloads: { platform: string, link: string }[];
  @Input() toolsImg: { decription: string, img: string }[];
  @Input() requirements: string;
  @Input() date: string;
  autoplayVideo: string = "false";

  public animatePage = false;

  constructor(public el: ElementRef, private sanitizer: DomSanitizer, private afStorage: AngularFireStorage) {
    this.sanitizer = sanitizer
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.animatePage) {
      const componentPosition = this.el.nativeElement.offsetTop + window.innerHeight / 2 //* (this.index + 1.9)
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.animatePage = true;
        this.autoplayVideo = "autoplay";
      }
    }
  }

  ngOnInit(): void {
    this.getTrustedUrl(this.imageLink);
  }

  getTrustedUrl(url: any) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
