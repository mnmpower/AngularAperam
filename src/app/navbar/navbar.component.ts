import {Component, OnInit} from '@angular/core';
import {NavbarService} from '../Services/navbar.service';
import {AuthenticateService} from '../Services/authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private nav: NavbarService,
    private _authenticationService: AuthenticateService,
    private router: Router

  ) {
    this.nav.hide();
  }

  ngOnInit() {
  }

  Uitloggen() {
    localStorage.removeItem('token');
    sessionStorage.clear();
    this.nav.hide();
    this.nav.hideAdmin();
    this._authenticationService.isLoggedin.next(false);
    this.router.navigate([''], {replaceUrl: true});

  }

}
