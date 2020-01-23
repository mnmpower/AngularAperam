import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlaatsService} from '../../Services/plaats.service';
import {Plaats} from '../../Models/plaats.model';

@Component({
  selector: 'app-beheer-plaats',
  templateUrl: './beheer-plaats.component.html',
  styleUrls: ['./beheer-plaats.component.scss']
})
export class BeheerPlaatsComponent implements OnInit {

  plaatsen: Plaats[];
  plaats: Plaats = new Plaats();
  popupNewPlaats: boolean = false;

  constructor(
    private router: Router,
    private plaatsService: PlaatsService
  ) {
    this.ReadPlaatsen();
  }

  private ReadPlaatsen() {
    this.plaatsService.getPlaatsen().subscribe(r => {
      this.plaatsen = r;
      console.log(this.plaatsen);
    });
  }

  closePopups() {
    this.popupNewPlaats = false;
  }


  ngOnInit() {
  }


  OpenNewPlaatsForm() {
    this.plaats.plaatsID = 0;
    this.plaats.naam = null;
    this.plaats.xcord = 0;
    this.plaats.ycord = 0;
    this.popupNewPlaats = true;
  }


  OpenEditPlaatsForm(plaatsID: number) {

    this.plaatsService.getPlaatsByID(plaatsID).subscribe(r => {
      this.plaats = r;
      console.log('plaats: ', this.plaats);
      this.popupNewPlaats = true;
    });

  }

  onSubmit() {
    if (this.plaats.plaatsID === 0) {
      console.log('post', this.plaats);
      this.plaatsService.addPlaats(this.plaats).subscribe(r => {
        this.plaats.plaatsID = r.plaatsID;
        console.log('plaats: ', this.plaats);
        this.ReadPlaatsen();
      });
    } else {
      console.log('put', this.plaats);
      this.plaatsService.updatePlaats(this.plaats).subscribe(r => {
        console.log('succes');
        this.ReadPlaatsen();
      });
    }

    this.closePopups();
  }

  deletePlaatsAlert(plaats: Plaats) {
    if (confirm('Ben jezeker dat je ' + plaats.naam + ' wilt verwijderen?')) {
      this.deletePlaats(plaats.plaatsID);
    }
  }

  deletePlaats(id: number) {
    this.plaatsService.deletePlaats(id).subscribe(result => {
      this.ReadPlaatsen();
    });
  }


}
