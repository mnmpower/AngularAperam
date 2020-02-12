import {Component, OnDestroy, OnInit} from '@angular/core';
import {MeldingService} from '../../Services/melding.service';
import {Melding} from '../../Models/melding.model';
import {interval, Observable, Subscription} from 'rxjs';

const source = interval(5000);

@Component({
  selector: 'app-meldingen',
  templateUrl: './meldingen.component.html',
  styleUrls: ['./meldingen.component.scss']
})
export class MeldingenComponent implements OnInit, OnDestroy {

  meldingen: Melding[] = [];
  nieuweMeldingen: Melding[] = [];


  subscription: Subscription;

  constructor(
    private meldingService: MeldingService,
  ) {
  }

  ngOnInit() {
    this.meldingService.getMeldingen().subscribe(r => {
      console.log(r);
      this.meldingen = r;
      this.refresh();
    });
  }

  refresh() {
    this.subscription = source.subscribe(val => this.meldingService.getMeldingen().subscribe(r => {
        console.log(r);
        this.nieuweMeldingen = r;
        if (this.nieuweMeldingen.length !== this.meldingen.length) {
          this.meldingen = this.nieuweMeldingen;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
