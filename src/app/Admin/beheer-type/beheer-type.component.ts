import {Component, Inject, OnInit} from '@angular/core';
import {Type} from '../../Models/type.model';
import {Router} from '@angular/router';
import {TypeService} from '../../Services/type.service';

@Component({
  selector: 'app-beheer-type',
  templateUrl: './beheer-type.component.html',
  styleUrls: ['./beheer-type.component.scss']
})
export class BeheerTypeComponent implements OnInit {

  types: Type[];
  type: Type = new Type();
  popupNewType: boolean = false;

  // popupEditType: boolean = false;


  constructor(
    private router: Router,
    private typeService: TypeService
  ) {
    this.ReadTypes();
  }

  private ReadTypes() {
    this.typeService.getTypes().subscribe(r => {
      this.types = r;
      console.log(this.types);
    });
  }

  closePopups() {
    this.popupNewType = false;
    // this.popupEditType = false;
  }

  ngOnInit() {
  }

  OpenNewTypeForm() {
    this.type.typeID = 0;
    this.type.functie = null;
    this.type.personen = null;
    this.popupNewType = true;
    // this.popupEditType = false;
  }


  OpenEditTypeForm(typeID: number) {

    this.typeService.getTypeByID(typeID).subscribe(r => {
      this.type = r;
      console.log('type: ', this.type);
      // this.popupEditType = true;
      this.popupNewType = true;
    });
  }


  onSubmit() {
    if (this.type.typeID === 0) {
      console.log('post', this.type);
      this.typeService.addType(this.type).subscribe(r => {
        this.type.typeID = r.typeID;
        console.log('type: ', this.type);
        this.ReadTypes();
      });
    } else {
      console.log('put', this.type);
      this.typeService.updateType(this.type).subscribe(r => {
        console.log('succes');
        this.ReadTypes();
      });
    }

    this.closePopups();
  }

  deleteTypeAlert(type: Type) {
    if (confirm('Ben jezeker dat je ' + type.functie + ' wilt verwijderen?')) {
      this.deleteType(type.typeID);
    }
  }

  deleteType(id: number) {
    this.typeService.deleteType(id).subscribe(result => {
      // this.popupEditType = false;
      this.ReadTypes();
    });
  }
}
