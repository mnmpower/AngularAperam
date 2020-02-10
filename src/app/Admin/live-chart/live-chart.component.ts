import {Component, Inject, NgZone, OnDestroy, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {MeldingService} from '../../Services/melding.service';
import {Melding} from '../../Models/melding.model';
import {PersoonService} from '../../Services/persoon.service';
import {Persoon} from '../../Models/persoon.model';
import {Router} from '@angular/router';
import {MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-live-chart',
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.scss']
})

export class LiveChartComponent implements OnInit {

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];

  melding: Melding = new Melding();
  personen: Persoon[] = [];
  randomID: number;

  constructor(
    private meldingService: MeldingService,
    private persoonService: PersoonService,
    private dialog: MatDialog,
    private ngZone: NgZone
  ) {

  }

  ngOnInit() {
    window['angularComponentReferenceo'] = {component: this, zone: this.ngZone, loadAngularFunctionOpen: () => this.AddMelding(),};
    window['angularComponentReferencec'] = {component: this, zone: this.ngZone, loadAngularFunctionClose: () => this.closeDialog(),};

    this.persoonService.getPersonen().subscribe(r => {
        this.personen = r;
      }
    );
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  SetMeldingEmpty() {
    this.melding.meldingID = 0;
    this.melding.plaatsID = 0;
    this.melding.persoonID = 0;
    this.melding.tijdstip = null;
    this.melding.plaats = null;
    this.melding.persoon = null;
  }

  AddMelding() {
    this.SetMeldingEmpty();
    this.randomID = Math.floor((Math.random() * this.personen.length) + 1);
    this.melding.persoonID = this.randomID;
    this.melding.plaatsID = 2;

    this.openDialog();

    this.meldingService.addMelding(this.melding).subscribe(r => {
      this.meldingService.getMeldingByID(r.meldingID).subscribe(re => {
        this.melding = re;
        console.log(re);
        this.nieuweMeldingMessage(this.melding);
      });
    });
  }

  public openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(LiveChartComponent, dialogConfig);
  }

  public closeDialog() {
    this.dialog.closeAll();
  }

  close() {
    this.dialog.closeAll();
  }

  nieuweMeldingMessage(melding: Melding) {

    // alert('Er is een nieuwe melding van ' + melding.persoon.naam + ', ' + melding.persoon.voornaam + '!!!');

  }

  
  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
