import {Component, OnDestroy, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {MeldingService} from '../../Services/melding.service';
import {Melding} from '../../Models/melding.model';


@Component({
  selector: 'app-live-chart',
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.scss']
})

export class LiveChartComponent implements OnInit {

  melding: Melding = new Melding();

  constructor(
    private meldingService: MeldingService
  ) {
  }

  ngOnInit() {

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  AddMelding() {
    this.melding.persoonID = 1;
    this.melding.plaatsID = 2;
    (async () => {
      // Do something before delay
      console.log('before delay');

      await this.delay(5300);

      // Do something after
      console.log('after delay');
      this.meldingService.addMelding(this.melding).subscribe(r => {
        console.log(r);
      });

    })();


  }
}
