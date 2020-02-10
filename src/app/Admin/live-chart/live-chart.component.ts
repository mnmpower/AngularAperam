import {Component, Input, NgZone, OnInit} from '@angular/core';
import {MeldingService} from '../../Services/melding.service';
import {Melding} from '../../Models/melding.model';
import {PersoonService} from '../../Services/persoon.service';
import {Persoon} from '../../Models/persoon.model';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Nieuwe overtreding</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Er is een nieuwe overtreding van {{persoon.naam}}, {{persoon.voornaam}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}


@Component({
  selector: 'app-live-chart',
  templateUrl: './live-chart.component.html',
  styleUrls: ['./live-chart.component.scss']
})

export class LiveChartComponent implements OnInit {

  melding: Melding = new Melding();
  personen: Persoon[] = [];
  randomID: number;
  persoon: Persoon = new Persoon();


  constructor(
    private meldingService: MeldingService,
    private persoonService: PersoonService,
    private ngZone: NgZone,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
    window['angularComponentReferenceo'] = {component: this, zone: this.ngZone, loadAngularFunctionOpen: () => this.AddMelding()};

    this.persoonService.getPersonen().subscribe(r => {
        this.personen = r;
      }
    );
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
    this.persoonService.getPersoonByID(this.randomID).subscribe(r => {
      this.persoon = r;
      this.openDialog();
    });

    this.meldingService.addMelding(this.melding).subscribe(r => {
      this.meldingService.getMeldingByID(r.meldingID).subscribe(re => {
        this.melding = re;
        console.log(re);
      });
    });
  }

  public openDialog() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.persoon = this.persoon;
  }

}
