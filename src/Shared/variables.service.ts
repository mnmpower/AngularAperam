import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  constructor() {
  }
  getAPIBase_URL(): string {
    return 'https://localhost:44356/api/';
  }
}

