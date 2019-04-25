import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBtnDropdownComponent } from './nav-btn-dropdown/nav-btn-dropdown.component';
import { NavBtnComponent } from './nav-btn/nav-btn.component';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';
import { CalculeSizeComponent } from './calcule-size/calcule-size.component';
import {DropdownComponentComponent} from '../dropdown/dropdown-component/dropdown-component.component';
import {DropdownBtnComponentComponent} from '../dropdown/dropdown-btn-component/dropdown-btn-component.component';

@NgModule({
  declarations: [NavBtnDropdownComponent, NavBtnComponent, NavGroupComponent, NavDropdownComponent, CalculeSizeComponent, DropdownComponentComponent, DropdownBtnComponentComponent],
  exports: [NavBtnDropdownComponent, NavBtnComponent, NavGroupComponent, NavDropdownComponent, DropdownComponentComponent, DropdownBtnComponentComponent],
  imports: [
    CommonModule
  ]
})
export class NavBtnDropdownModule { }
