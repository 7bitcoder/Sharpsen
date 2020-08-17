import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationElementComponent } from './presentation-element.component';

describe('PresentationElementComponent', () => {
  let component: PresentationElementComponent;
  let fixture: ComponentFixture<PresentationElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationElementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
