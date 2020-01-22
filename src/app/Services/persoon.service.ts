import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persoon} from '../Models/persoon.model';
import {VariablesService} from '../../Shared/variables.service';

@Injectable({
  providedIn: 'root'
})
export class PersoonService {

  constructor(private http: HttpClient, private variablesService: VariablesService) {
  }

  private Base_URL = this.variablesService.getAPIBase_URL();

  getPersonen(): Observable<Persoon[]> {
    return this.http.get<Persoon[]>(this.Base_URL + 'Persoon');
  }
}
