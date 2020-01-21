import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../Services/navbar.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private nav: NavbarService
  ) {
    this.nav.hide();
  }

  ngOnInit() {
  }

  Uitloggen(){
    this.nav.hide();
    this.nav.hideAdmin();
  }

}
