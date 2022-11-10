import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parte1Component } from './parte1/parte1.component';
import { Parte2Component } from './parte2/parte2.component';
import { Parte3Component } from './parte3/parte3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Parte4Component } from './parte4/parte4.component';
import { FormClienteComponent } from './parte2/form-cliente/form-cliente.component';
import { FormDepositosComponent } from './parte3/form-depositos/form-depositos.component';
import { FormRetirosComponent } from './parte4/form-retiros/form-retiros.component';


@NgModule({
  declarations: [
    AppComponent,
    Parte1Component,
    Parte2Component,
    Parte3Component,
    SidebarComponent,
    Parte4Component,
    FormClienteComponent,
    FormDepositosComponent,
    FormRetirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,

    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
