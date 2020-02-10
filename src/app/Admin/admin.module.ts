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
import {MatDialogModule, MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    BeheerMeldingenComponent,
    BeheerPlaatsComponent,
    BeheerPersoonComponent,
    BeheerTypeComponent,
    DashboardAdminComponent,
    GrafiekenComponent,
    LiveChartComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
    ChartsModule
  ],
  exports: [
    LiveChartComponent,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class AdminModule {
}
