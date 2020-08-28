import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBarComponent } from './scroll-bar.component';

describe('ScrollBarComponent', () => {
  let component: ScrollBarComponent;
  let fixture: ComponentFixture<ScrollBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
