import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBrowseComponent } from './header-browse.component';

describe('HeaderBrowseComponent', () => {
  let component: HeaderBrowseComponent;
  let fixture: ComponentFixture<HeaderBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
