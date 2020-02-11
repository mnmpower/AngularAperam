import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavbarService} from '../Services/navbar.service';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticateService} from '../Services/authenticate.service';
import {Observable} from 'rxjs';
import {Persoon} from '../Models/persoon.model';
import {PersoonService} from '../Services/persoon.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  submitted = false;
  gebruiker: Persoon;

  loginForm = this.fb.group({
    Usernaam: ['', Validators.required],
    Wachtwoord: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private nav: NavbarService,
    private fb: FormBuilder,
    private _authenticationService: AuthenticateService,
    private persoonService: PersoonService
  ) {
  }

  ngOnInit() {
  }

  DoorgaanAlsGuest() {
    this.nav.show();
    this.router.navigate(['dashboard'], {replaceUrl: true});
  }

  //
  DoorgaanAlsAdmin() {
    this.nav.show();
    this.nav.ShowAdmin();
    this.router.navigate(['dashboardAdmin'], {replaceUrl: true});
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    console.log(this.loginForm.getRawValue());

    this._authenticationService.authenticate(this.loginForm.value).subscribe(result => {
      localStorage.setItem('token', result.token);
      console.log('result', result);

      this._authenticationService.isLoggedin.next(result.token ? true : false);

      if (result.typeID === 1) {
        this.router.navigate(['dashboardAdmin'], {replaceUrl: true});
        console.log('naREdirect');
        this.DoorgaanAlsAdmin();
      } else {
        this.router.navigate(['dashboard'], {replaceUrl: true});
        this.DoorgaanAlsGuest();
      }

    });
    console.log('INLOGGEN MISLUKT');
  }
}
