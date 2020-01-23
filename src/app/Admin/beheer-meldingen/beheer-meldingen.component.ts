import { Component, OnInit } from '@angular/core';
import {Type} from '../../Models/type.model';
import {Router} from '@angular/router';
import {TypeService} from '../../Services/type.service';
import {Persoon} from '../../Models/persoon.model';
import {Plaats} from '../../Models/plaats.model';
import {Melding} from '../../Models/melding.model';
import {PersoonService} from '../../Services/persoon.service';
import {MeldingService} from '../../Services/melding.service';

@Component({
  selector: 'app-beheer-meldingen',
  templateUrl: './beheer-meldingen.component.html',
  styleUrls: ['./beheer-meldingen.component.scss']
})
export class BeheerMeldingenComponent implements OnInit {

  personen: Persoon[];
  plaatsen: Plaats[];
  meldingen: Melding[];
  melding: Melding = new Melding();
  newOrEdit: boolean = false;

  constructor(
    private router: Router,
    private typeService: TypeService,
    private persoonService: PersoonService,
    private meldingSerivce: MeldingService
  ) {
    this.ReadMeldingen();
    this.ReadPersonen();
  }

  private ReadMeldingen() {
    this.meldingSerivce.getMeldingen().subscribe(r => {
      this.meldingen = r;
      console.log(this.meldingen);
    });
  }

  private ReadPersonen() {
    this.persoonService.getPersonen().subscribe(r => {
      this.personen = r;
      console.log(this.personen);
    });
  }

  closePopup() {
    this.newOrEdit = false;
  }

  ngOnInit() {
  }

  OpenNewMeldingForm() {
    this.melding.meldingID = 0;
    this.melding.plaatsID = null;
    this.melding.persoonID = null;
    this.melding.tijdstip = null;
    this.newOrEdit = true;
  }


  OpenEditMeldingForm(meldingID: number) {

    this.meldingSerivce.getMeldingByID(meldingID).subscribe(r => {
      this.melding = r;
      console.log('type: ', this.melding);
      this.newOrEdit = true;
    });
  }


  onSubmit() {
    if (this.melding.meldingID === 0) {
      console.log('post', this.melding);
      this.meldingSerivce.addMelding(this.melding).subscribe(r => {
        this.melding.meldingID = r.meldingID;
        console.log('type: ', this.melding);
        this.ReadMeldingen();
      });
    } else {
      console.log('put', this.melding);
      this.meldingSerivce.updateMelding(this.melding).subscribe(r => {
        console.log('succes');
        this.ReadMeldingen();
      });
    }

    this.closePopup();
  }

  deleteMeldingAlert(melding: Melding) {
    if (confirm('Ben jezeker dat je deze melding wilt verwijderen?')) {
      this.deleteMelding(melding.meldingID);
    }
  }

  deleteMelding(id: number) {
    this.meldingSerivce.deleteMelding(id).subscribe(result => {
      this.ReadMeldingen();
    });
  }
}
