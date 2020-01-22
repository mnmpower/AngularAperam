import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Melding} from '../Models/melding.model';
import {VariablesService} from '../../Shared/variables.service';


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
}
