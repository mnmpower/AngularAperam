import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./User/dashboard/dashboard.component";
import {MeldingenComponent} from "./User/meldingen/meldingen.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {LiveChartComponent} from "./Admin/live-chart/live-chart.component";
import {DashboardAdminComponent} from "./Admin/dashboard-admin/dashboard-admin.component";
import {BeheerMeldingenComponent} from "./Admin/beheer-meldingen/beheer-meldingen.component";
import {BeheerPersoonComponent} from "./Admin/beheer-persoon/beheer-persoon.component";
import {BeheerPlaatsComponent} from "./Admin/beheer-plaats/beheer-plaats.component";
import {BeheerTypeComponent} from "./Admin/beheer-type/beheer-type.component";
import {GrafiekenComponent} from "./Admin/grafieken/grafieken.component";


const routes: Routes = [
  // ALLES
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: HomeComponent},

  //USER GUEST
  {path: 'dashboard', component: DashboardComponent },
  // {path: 'Dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard]},
  {path: 'meldingen', component: MeldingenComponent},

  //ADMIN: + GUARD TOEVOEGEN
  {path: 'dashboardAdmin', component: DashboardAdminComponent},
  {path: 'beheer_meldingen', component: BeheerMeldingenComponent},
  {path: 'beheer_personen', component: BeheerPersoonComponent},
  {path: 'beheer_plaatsen', component: BeheerPlaatsComponent},
  {path: 'beheer_types', component: BeheerTypeComponent},
  {path: 'grafieken', component: GrafiekenComponent},
  {path: 'live_chart', component: LiveChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
