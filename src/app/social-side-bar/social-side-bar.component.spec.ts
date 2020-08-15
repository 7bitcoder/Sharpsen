import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSideBarComponent } from './social-side-bar.component';

describe('SocialSideBarComponent', () => {
  let component: SocialSideBarComponent;
  let fixture: ComponentFixture<SocialSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
