import {Component, OnDestroy, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {MeldingService} from '../../Services/melding.service';
import {Melding} from '../../Models/melding.model';
import {PersoonService} from '../../Services/persoon.service';
import {Persoon} from '../../Models/persoon.model';


@Component({
  selector: 'app-live-chart',
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.scss']
})

export class LiveChartComponent implements OnInit {

  melding: Melding = new Melding();
  personen: Persoon[] = [];
  randomID: number;

  constructor(
    private meldingService: MeldingService,
    private persoonService: PersoonService
  ) {
  }

  ngOnInit() {

    this.persoonService.getPersonen().subscribe(r => {
      this.personen = r;
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  AddMelding() {
    this.randomID = Math.floor((Math.random() * this.personen.length) + 1);
    this.melding.persoonID = this.randomID;
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
