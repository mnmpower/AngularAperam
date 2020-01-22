import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LiveChartComponent} from "./live-chart/live-chart.component";



@NgModule({
  declarations: [
    LiveChartComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LiveChartComponent
  ]
})
export class AdminModule { }
