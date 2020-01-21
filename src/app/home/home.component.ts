import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavbarService} from "../Services/navbar.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private nav: NavbarService
  ) {
  }

  ngOnInit() {
  }

  DoorgaanAlsGuest() {
    this.nav.show();
    this.router.navigate(['dashboard'], {replaceUrl: true});
  }

  DoorgaanAlsAdmin() {
    this.nav.show();
    this.nav.ShowAdmin();
    this.router.navigate(['dashboardAdmin'], {replaceUrl: true});
  }
}
