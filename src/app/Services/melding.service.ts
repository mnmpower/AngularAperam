import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Melding} from "../Models/melding.model";


@Injectable({
  providedIn: 'root'
})
export class MeldingService {

  constructor(private http: HttpClient) { }
  private Base_URL = "https://localhost:44356/api/";

  getMeldingen(): Observable<Melding[]> {
    return this.http.get<Melding[]>(this.Base_URL+'Melding');
  }
}
