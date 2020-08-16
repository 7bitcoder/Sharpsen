import { Component, OnInit, Input, HostBinding, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, sequence } from '@angular/animations';

@Component({
  selector: 'app-presentation-element',
  templateUrl: './presentation-element.component.html',
  styleUrls: ['./presentation-element.component.css'],
  animations: [
    trigger('backgroundIn', [
      state('void', style({ transform: 'translateX(-100vw)' })),
      state('*', style({transform: 'translateX(-100vw)' })),
      state('show', style({transform: 'translateX(0vw) skewX(0deg)'})),
      transition('* <=> show', 
        sequence([
          animate('0.25s ease-in', style({transform: 'translateX(-50vw) skewX(40deg)'})),
          animate('0.25s ease-out', style({transform: 'translateX(0vw) skewX(0deg)'}))
        ])
      ),
    ]),
    trigger('imageIn', [
      state('void', style({ transform: 'translateX(-100vw)' })),
      state('*', style({ transform: 'translateX(-100vw)' })),
      state('show', style({ transform: 'translateX(0vw)'})),
      transition('* <=> show', 
        animate('0.5s 0.5s ease-in-out'),
      )
    ]),
    trigger('TextIn', [
      state('void', style({ transform: 'translateY(-100vw)' })),
      state('*', style({ transform: 'translateY(-100vw)' })),
      state('show', style({ transform: 'translateY(0vw)'})),
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

  public animatePage = false;

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if(!this.animatePage){
      const componentPosition = this.el.nativeElement.offsetTop + (window.innerHeight*this.id) + window.innerHeight/2
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.animatePage = true;
        console.log(componentPosition)
      }
    }
  }

  ngOnInit(): void {
  }

}
