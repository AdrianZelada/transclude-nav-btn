import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeSizeComponent } from './calcule-size.component';

describe('CalculeSizeComponent', () => {
  let component: CalculeSizeComponent;
  let fixture: ComponentFixture<CalculeSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculeSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculeSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
