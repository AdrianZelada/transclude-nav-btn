import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBtnDropdownComponent } from './nav-btn-dropdown.component';

describe('NavBtnDropdownComponent', () => {
  let component: NavBtnDropdownComponent;
  let fixture: ComponentFixture<NavBtnDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBtnDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBtnDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
