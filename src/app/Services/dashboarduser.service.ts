import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dashboarduser} from '../ViewModels/dashboarduser.viewmodel';
import {VariablesService} from '../../Shared/variables.service';

@Injectable({
  providedIn: 'root'
})
export class DashboarduserService {
  constructor(private http: HttpClient, private variablesService: VariablesService) {
  }

  private Base_URL = this.variablesService.getAPIBase_URL();

  getDashboardUserVM(): Observable<Dashboarduser> {
    return this.http.get<Dashboarduser>(this.Base_URL + 'DashboardUserVM');
  }
}
