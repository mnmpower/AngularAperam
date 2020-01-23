import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DashboarduserService} from '../../Services/dashboarduser.service';
import {Tabel} from '../../Models/tabel.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'dashboard-user',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['TagNummer', 'Naam', 'Voornaam', 'Type', 'Overtredingen', 'Recenstste', 'Plaats'];
  dataSource;
  tabelen: Tabel[] = [];

  constructor(
    private dashboarduserService: DashboarduserService
  ) {
    this.dashboarduserService.getDashboardUserVM().subscribe(r => {
      this.tabelen = r.tabellen;
      console.log(r);
      this.dataSource = new MatTableDataSource(this.tabelen);
    });
  }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


