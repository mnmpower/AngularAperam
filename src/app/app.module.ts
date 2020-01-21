import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "../Shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UserModule} from "./User/user.module";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";
import { LiveChartComponent } from './Admin/live-chart/live-chart.component';
import {AdminModule} from "./Admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    UserModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
  ]
})
export class AppModule { }
