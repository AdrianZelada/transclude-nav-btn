import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBtnComponentComponent } from './dropdown-btn-component.component';

describe('DropdownBtnComponentComponent', () => {
  let component: DropdownBtnComponentComponent;
  let fixture: ComponentFixture<DropdownBtnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownBtnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBtnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
