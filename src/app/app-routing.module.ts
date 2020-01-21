import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./User/dashboard/dashboard.component";
import {MeldingenComponent} from "./User/meldingen/meldingen.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {LiveChartComponent} from "./Admin/live-chart/live-chart.component";


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  // {path: 'Dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard]},
  {path: 'meldingen', component: MeldingenComponent},
  {path: 'live_chart', component: LiveChartComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
