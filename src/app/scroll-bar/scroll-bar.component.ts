import { Component, OnInit, Input, HostBinding, HostListener, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, sequence, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.css']
})
export class ScrollBarComponent implements OnInit {

  progress: String = "0%"
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    this.progress = scrolled + "%";
  }

}
