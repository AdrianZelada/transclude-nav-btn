import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBtnDropdownModule} from './nav-btn-dropdown/nav-btn-dropdown.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavBtnDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
