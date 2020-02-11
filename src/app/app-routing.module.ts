import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './User/dashboard/dashboard.component';
import {MeldingenComponent} from './User/meldingen/meldingen.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {LiveChartComponent} from './Admin/live-chart/live-chart.component';
import {DashboardAdminComponent} from './Admin/dashboard-admin/dashboard-admin.component';
import {BeheerMeldingenComponent} from './Admin/beheer-meldingen/beheer-meldingen.component';
import {BeheerPersoonComponent} from './Admin/beheer-persoon/beheer-persoon.component';
import {BeheerPlaatsComponent} from './Admin/beheer-plaats/beheer-plaats.component';
import {BeheerTypeComponent} from './Admin/beheer-type/beheer-type.component';
import {GrafiekenComponent} from './Admin/grafieken/grafieken.component';
import {NeedAuthGuard} from './security/need-auth-guard';
import {ForbiddenComponent} from './forbidden/forbidden.component';


const routes: Routes = [
  // ALLES
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: HomeComponent},
  {path: 'forbidden', component: ForbiddenComponent},

  // USER GUEST
  // {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard]},
  {path: 'meldingen', component: MeldingenComponent, canActivate: [NeedAuthGuard]},

  // ADMIN: + GUARD TOEVOEGEN
  {path: 'dashboardAdmin', component: DashboardAdminComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheer_meldingen', component: BeheerMeldingenComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheer_personen', component: BeheerPersoonComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheer_plaatsen', component: BeheerPlaatsComponent, canActivate: [NeedAuthGuard]},
  {path: 'beheer_types', component: BeheerTypeComponent, canActivate: [NeedAuthGuard]},
  {path: 'grafieken', component: GrafiekenComponent, canActivate: [NeedAuthGuard]},
  {path: 'live_chart', component: LiveChartComponent, canActivate: [NeedAuthGuard]},

  // al de rest doorsturen naar home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
