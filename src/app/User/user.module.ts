import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { MeldingenComponent } from './meldingen/meldingen.component';
import {MeldingService} from "../Services/melding.service";



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
  ],
  providers: [
    MeldingService
  ]
})
export class UserModule { }
