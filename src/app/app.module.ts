import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "../Shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UserModule} from "./User/user.module";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {AdminModule} from "./Admin/admin.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SecurityInterceptor} from './security/security.interceptor';
import {NeedAuthGuard} from './security/need-auth-guard';
import {PersoonService} from './Services/persoon.service';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ForbiddenComponent
  ],
  imports: [
    UserModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule
  ],
  providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: SecurityInterceptor,
  multi: true,
},
  NeedAuthGuard,
  PersoonService,
  NavbarComponent
],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {
}
