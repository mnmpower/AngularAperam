import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { MeldingService } from 'src/app/Services/melding.service';

@Component({
  selector: 'app-grafieken',
  templateUrl: './grafieken.component.html',
  styleUrls: ['./grafieken.component.scss']
})
export class GrafiekenComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli','Augustus','September','November','Oktober','December'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'meldingen' },
  ];

  constructor(private meldingService: MeldingService) { 

  }

  ngOnInit() {

    this.meldingService.getCountEachMonth('2020').subscribe(result =>{
      console.log(result);
      this.barChartData[0].data =result;
    })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
