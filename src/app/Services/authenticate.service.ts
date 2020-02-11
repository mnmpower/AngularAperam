import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PersoonService} from './persoon.service';
import {Persoon} from '../Models/persoon.model';
import {UserLogin} from '../Models/user-login.model';
import {VariablesService} from '../../Shared/variables.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isLoggedin = new BehaviorSubject(localStorage.getItem('token') ? true : false);

  private Base_URL = this.variablesService.getAPIBase_URL();

  constructor(private _httpClient: HttpClient, private persoonService: PersoonService, private variablesService: VariablesService) {
  }

  authenticate(userLogin: UserLogin): Observable<Persoon> {
    return this._httpClient.post<Persoon>(this.Base_URL + 'Persoon/authenticate', userLogin);
  }

  isLogged() {
    return this.persoonService.getIdOfCurrentUser();
  }
}
