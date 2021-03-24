import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componentes/contact/contact.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { VipComponent } from './componentes/vip/vip.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'vip', component: VipComponent, canActivate: [SessionGuard] },
  { path: 'premium',loadChildren: () => import("./modules/premium/premium.module").then(mod => mod.PremiumModule), canActivate: [SessionGuard] },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }