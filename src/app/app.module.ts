import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "../Shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UserModule} from "./User/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
