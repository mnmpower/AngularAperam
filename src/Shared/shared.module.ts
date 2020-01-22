import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  exports: []
})
export class SharedModule {
}
