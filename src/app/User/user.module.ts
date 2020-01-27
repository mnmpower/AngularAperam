import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MeldingenComponent} from './meldingen/meldingen.component';
import {MeldingService} from '../Services/melding.service';
import {MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    DashboardComponent,
    MeldingenComponent,
  ],
  exports: [
    DashboardComponent,
    MatSortModule
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [
    MeldingService
  ]
})
export class UserModule {
}
