import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProfilesComponent } from './manager-profiles.component';

describe('ManagerProfilesComponent', () => {
  let component: ManagerProfilesComponent;
  let fixture: ComponentFixture<ManagerProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
