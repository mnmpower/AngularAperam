import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./User/dashboard/dashboard.component";
import {MeldingenComponent} from "./User/meldingen/meldingen.component";


const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent },
  // {path: 'Dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard]},
  {path: 'Meldingen', component: MeldingenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
