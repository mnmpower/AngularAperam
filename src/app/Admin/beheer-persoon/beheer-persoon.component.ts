import {Component, OnInit} from '@angular/core';
import {Type} from '../../Models/type.model';
import {Router} from '@angular/router';
import {Persoon} from '../../Models/persoon.model';
import {PersoonService} from '../../Services/persoon.service';
import {TypeService} from '../../Services/type.service';

@Component({
  selector: 'app-beheer-persoon',
  templateUrl: './beheer-persoon.component.html',
  styleUrls: ['./beheer-persoon.component.scss']
})
export class BeheerPersoonComponent implements OnInit {

  invalideForm = false;

  wachtwoordHerhaling = '';

  personen: Persoon[];
  types: Type[];
  persoon: Persoon = new Persoon();
  popupNewPersoon = false;

  // popupEditPersoon: boolean = false;


  constructor(
    private router: Router,
    private persoonService: PersoonService,
    private typeService: TypeService
  ) {
    this.ReadPersonen();
    this.ReadTypes();
  }

  private ReadTypes() {
    this.typeService.getTypes().subscribe(r => {
      this.types = r;
      console.log(this.types);
    });
  }

  private ReadPersonen() {
    this.persoonService.getPersonen().subscribe(r => {
      this.personen = r;
      console.log(this.personen);
    });
  }

  closePopups() {
    this.popupNewPersoon = false;
    // this.popupEditPersoon = false;
  }

  ngOnInit() {
  }

  OpenNewPersoonForm() {
    this.persoon.persoonID = 0;
    this.persoon.voornaam = null;
    this.persoon.naam = null;
    this.persoon.usernaam = null;
    this.persoon.wachtwoord = null;
    this.persoon.typeID = 0;
    this.popupNewPersoon = true;
    this.invalideForm = false;
    // this.popupEditPersoon = false;
  }


  OpenEditPersoonForm(persoonID: number) {

    this.persoonService.getPersoonByID(persoonID).subscribe(r => {
      this.persoon = r;
      console.log('type: ', this.persoon);
      // this.popupEditPersoon = true;
      this.popupNewPersoon = true;
      this.invalideForm = false;
    });
  }


  onSubmit() {
    if (this.persoon.persoonID === 0) {
      if (this.wachtwoordHerhaling != this.persoon.wachtwoord) {
        this.invalideForm = true;
        return;
      } else {
        this.invalideForm = true;
      }
      console.log('post', this.persoon);
      this.persoonService.addPersoon(this.persoon).subscribe(r => {
        this.persoon.persoonID = r.persoonID;
        console.log('type: ', this.persoon);
        this.ReadPersonen();
      });
    } else {
      console.log('put', this.persoon);
      this.persoonService.updatePersoon(this.persoon).subscribe(r => {
        console.log('succes');
        this.ReadPersonen();
      });
    }

    this.closePopups();
  }

  deleteTypeAlert(persoon: Persoon) {
    if (confirm('Ben jezeker dat je ' + persoon.naam + ', ' + persoon.voornaam + ' wilt verwijderen?')) {
      this.deletePersoon(persoon.persoonID);
    }
  }

  deletePersoon(persoonID: number) {
    this.persoonService.deletePersoon(persoonID).subscribe(result => {
      // this.popupEditPersoon = false;
      this.ReadPersonen();
    });
  }

}
