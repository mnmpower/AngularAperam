import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiveChartComponent} from './live-chart/live-chart.component';
import {DashboardAdminComponent} from './dashboard-admin/dashboard-admin.component';
import {BeheerMeldingenComponent} from './beheer-meldingen/beheer-meldingen.component';
import {BeheerPlaatsComponent} from './beheer-plaats/beheer-plaats.component';
import {BeheerPersoonComponent} from './beheer-persoon/beheer-persoon.component';
import {BeheerTypeComponent} from './beheer-type/beheer-type.component';
import {GrafiekenComponent} from './grafieken/grafieken.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    BeheerMeldingenComponent,
    BeheerPlaatsComponent,
    BeheerPersoonComponent,
    BeheerTypeComponent,
    DashboardAdminComponent,
    GrafiekenComponent,
    LiveChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    LiveChartComponent,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class AdminModule {
}
