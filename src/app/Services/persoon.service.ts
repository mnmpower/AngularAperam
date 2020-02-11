import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persoon} from '../Models/persoon.model';
import {VariablesService} from '../../Shared/variables.service';
import {Type} from '../Models/type.model';

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

  getPersoonByID(persoonID: number) {
    return this.http.get<Persoon>(this.Base_URL + 'Persoon/' + persoonID);
  }

  addPersoon(persoon: Persoon) {
    return this.http.post<Persoon>(this.Base_URL + 'Persoon', persoon,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  updatePersoon(persoon: Persoon) {
    return this.http.put<Persoon>(this.Base_URL + 'Persoon/' + persoon.persoonID, persoon,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  deletePersoon(persoonID: number) {
    return this.http.delete<Persoon>(this.Base_URL + 'Persoon/' + persoonID,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  // haal makerID/bedrijfID/adminID van current user op
  getIdOfCurrentUser(): Observable<number> {
    return this.http.get<number>(this.Base_URL + 'Persoon/idcurrentuser');
  }
}
