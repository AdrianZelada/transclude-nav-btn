import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBtnDropdownComponent } from './nav-btn-dropdown/nav-btn-dropdown.component';
import { NavBtnComponent } from './nav-btn/nav-btn.component';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';

@NgModule({
  declarations: [NavBtnDropdownComponent, NavBtnComponent, NavGroupComponent, NavDropdownComponent],
  exports: [NavBtnDropdownComponent, NavBtnComponent, NavGroupComponent, NavDropdownComponent],
  imports: [
    CommonModule
  ]
})
export class NavBtnDropdownModule { }
