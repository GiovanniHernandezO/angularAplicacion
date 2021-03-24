import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickComponent } from '../componentes/rick/rick.component';
import { StarComponent } from '../componentes/star/star.component';
import { PremiumComponent } from '../componentes/premium/premium.component';

const routes: Routes = [
  { path: 'rick', component: RickComponent },
  { path: 'star', component: StarComponent },
  { path: '', component: PremiumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiumRoutingModule { }
