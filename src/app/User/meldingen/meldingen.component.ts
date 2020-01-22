import { Component, OnInit } from '@angular/core';
import {MeldingService} from "../../Services/melding.service";
import {Melding} from "../../Models/melding.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-meldingen',
  templateUrl: './meldingen.component.html',
  styleUrls: ['./meldingen.component.scss']
})
export class MeldingenComponent implements OnInit {

  meldingen: Melding[];

  constructor(
    private meldingService: MeldingService,
  ) { }

  ngOnInit() {
   this.meldingService.getMeldingen().subscribe(r => {
      console.log(r);
     this.meldingen = r;
   });
  }

}
