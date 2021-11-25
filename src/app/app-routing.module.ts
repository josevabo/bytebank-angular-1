import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo: 'extrato', pathMatch: 'full'}, //em rota vazia, redirecionar toda pagina para extrato
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot espera array de objetos tipo Route
  exports: [RouterModule]
})

export class AppRoutingModule{}
