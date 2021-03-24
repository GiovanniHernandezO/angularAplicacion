import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";

import { PremiumRoutingModule } from './premium-routing.module';
import { PremiumComponent } from '../componentes/premium/premium.component';
import { RickComponent } from '../componentes/rick/rick.component';
import { StarComponent } from '../componentes/star/star.component';


@NgModule({
  declarations: [
    PremiumComponent,
    RickComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    PremiumRoutingModule,
    DataTablesModule
  ]
})
export class PremiumModule { }
