import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {DashboarduserService} from '../../Services/dashboarduser.service';
import {Tabel} from '../../Models/tabel.model';
import {MatSort} from '@angular/material';

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

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dashboarduserService: DashboarduserService
  ) {
    this.dashboarduserService.getDashboardUserVM().subscribe(r => {
      this.tabelen = r.tabellen;
      console.log(r);
      this.dataSource = new MatTableDataSource(this.tabelen);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


