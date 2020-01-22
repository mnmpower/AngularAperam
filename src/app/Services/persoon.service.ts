import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persoon} from '../Models/persoon.model';

@Injectable({
  providedIn: 'root'
})
export class PersoonService {

  constructor(private http: HttpClient) {
  }

  private Base_URL = 'https://localhost:44356/api/';

  getPersonen(): Observable<Persoon[]> {
    return this.http.get<Persoon[]>(this.Base_URL + 'Persoon');
  }
}
