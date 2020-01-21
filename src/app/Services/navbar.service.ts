import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;
  admin: boolean;

  constructor() {
    this.visible = false;
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  ShowAdmin() {
    this.admin = true;
  }

  hideAdmin() {
    this.admin = false;
  }

}
