import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { MeldingenComponent } from './meldingen/meldingen.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MeldingenComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
