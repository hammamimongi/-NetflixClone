import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmWrapperComponent } from './film-wrapper.component';

describe('FilmWrapperComponent', () => {
  let component: FilmWrapperComponent;
  let fixture: ComponentFixture<FilmWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
