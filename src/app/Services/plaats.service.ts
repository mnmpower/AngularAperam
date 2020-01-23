import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Plaats} from '../Models/plaats.model';
import {VariablesService} from 'src/Shared/variables.service';
import {Persoon} from '../Models/persoon.model';

@Injectable({
  providedIn: 'root'
})
export class PlaatsService {

  constructor(private http: HttpClient, private variablesService: VariablesService) {

  }

  private Base_URL = this.variablesService.getAPIBase_URL();

  getPlaatsen(): Observable<Plaats[]> {
    return this.http.get<Plaats[]>(this.Base_URL + 'Plaats');


  }

  getPlaatsByID(plaatsID: number) {
    return this.http.get<Plaats>(this.Base_URL + 'Plaats/' + plaatsID);

  }


  addPlaats(plaats: Plaats) {
    return this.http.post<Persoon>(this.Base_URL + 'Plaats', plaats,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  updatePlaats(plaats: Plaats) {
    return this.http.put<Plaats>(this.Base_URL + 'Plaats/' + plaats.plaatsID, plaats,
      {
        headers: new HttpHeaders().set('Authotization', 'Bearer' + localStorage.getItem('token'))
      });
  }

  deletePlaats(plaatsID: number) {
    return this.http.delete<Plaats>(this.Base_URL + 'Plaats/' + plaatsID,
      {
        headers: new HttpHeaders().set('Authentication', ' Bearer' + localStorage.getItem('token'))
      });
  }


}
