import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PresentationElementComponent } from '../presentation-element/presentation-element.component';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ transform: 'translateX(100vw)' })),
      state('*', style({transform: 'translateX(100vw)' })),
      state('show', style({transform: 'translateX(0vw)' })),
      transition('* <=> show', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class PresentationComponent implements OnInit {

  show = false;
  public projects = [];
  constructor(public el: ElementRef, private projectsService: ProjectsService) { 
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      if(!this.show){
        const componentPosition = this.el.nativeElement.offsetTop + window.innerHeight
        const scrollPosition = window.pageYOffset

        if (scrollPosition >= componentPosition) {
          this.show = true;
          console.log(this.show)
        }
      }
    }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(data => this.projects = data)    
  }

}
