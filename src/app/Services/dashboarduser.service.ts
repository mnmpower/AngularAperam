import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../Models/type.model';
import {Dashboarduser} from '../ViewModels/dashboarduser.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class DashboarduserService {
  constructor(private http: HttpClient) {
  }

  private Base_URL = 'https://localhost:44356/api/';

  getDashboardUserVM(): Observable<Dashboarduser> {
    return this.http.get<Dashboarduser>(this.Base_URL + 'DashboardUser');
  }
}
