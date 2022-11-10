import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Parte1Component } from './parte1/parte1.component';
import { FormClienteComponent } from './parte2/form-cliente/form-cliente.component';
import { Parte2Component } from './parte2/parte2.component';
import { FormDepositosComponent } from './parte3/form-depositos/form-depositos.component';
import { Parte3Component } from './parte3/parte3.component';
import { FormRetirosComponent } from './parte4/form-retiros/form-retiros.component';
import { Parte4Component } from './parte4/parte4.component';

const routes: Routes = [
  {
    path: "login",
    component: Parte1Component
  },
  {
    path: "clientes",
    component: Parte2Component
  },
  {
    path: "clientes/agregar",
    component: FormClienteComponent
  },
  {
    path: "clientes/:id",
    component: FormClienteComponent
  },
  {
    path: "depositos",
    component: Parte3Component
  },
  {
    path: "depositos/agregar",
    component: FormDepositosComponent
  },
  {
    path: "depositos/:id",
    component: FormDepositosComponent
  },
  {
    path: "retiros",
    component: Parte4Component
  },
  {
    path: "retiros/agregar",
    component: FormRetirosComponent
  },
  {
    path: "retiros/:id",
    component: FormRetirosComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
