import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  constructor() {
  }
  getAPIBase_URL(): string {
    return 'http://localhost:51665/api/';
  }
}

