import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MeldingenComponent} from './meldingen/meldingen.component';
import {MeldingService} from '../Services/melding.service';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';


@NgModule({
  declarations: [
    DashboardComponent,
    MeldingenComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatInputModule
  ],
  providers: [
    MeldingService
  ]
})
export class UserModule {
}
