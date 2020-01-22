import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../Models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) {
  }

  private Base_URL = 'https://localhost:44356/api/';

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.Base_URL + 'Type');
  }

  getTypeByID(typeID: number) {
    return this.http.get<Type>(this.Base_URL + 'Type/' + typeID);
  }

  addType(type: Type) {
    return this.http.post<Type>(this.Base_URL + 'Type', type,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  updateType(type: Type) {
    return this.http.put<Type>(this.Base_URL + 'Type/' + type.typeID, type,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }

  deleteType(typeID: number) {
    return this.http.delete<Type>(this.Base_URL + 'Type/' + typeID,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
      });
  }
}
