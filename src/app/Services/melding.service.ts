import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Melding} from '../Models/melding.model';
import {VariablesService} from '../../Shared/variables.service';
import {Type} from '../Models/type.model';


@Injectable({
  providedIn: 'root'
})
export class MeldingService {

  constructor(private http: HttpClient, private variablesService: VariablesService) {
  }

  private Base_URL = this.variablesService.getAPIBase_URL();

  getMeldingen(): Observable<Melding[]> {
    return this.http.get<Melding[]>(this.Base_URL + 'Melding');
  }

  getMeldingByID(meldingID: number) {
    return this.http.get<Melding>(this.Base_URL + 'Melding/' + meldingID);
  }

  addMelding(melding: Melding) {
    return this.http.post<Melding>(this.Base_URL + 'Melding', melding,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  updateMelding(melding: Melding) {
    return this.http.put<Melding>(this.Base_URL + 'Melding/' + melding.meldingID, melding,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  deleteMelding(meldingID: number) {
    return this.http.delete<Melding>(this.Base_URL + 'Melding/' + meldingID,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  getCountEachMonth(year: string){
    return this.http.get<any>(this.Base_URL+ 'melding/countEachMonth?year=' + year);

  }
}
