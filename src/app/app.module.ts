import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ValidacionesDirective } from './directivas/validaciones.directive';
import { VipComponent } from './componentes/vip/vip.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeDetalleComponent } from './componentes/home-detalle/home-detalle.component';
import { GeneroPipe } from './pipes/genero.pipe';
import { EstadoPipe } from './pipes/estado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ValidacionesDirective,
    VipComponent,
    LoginComponent,
    HomeDetalleComponent,
    GeneroPipe,
    EstadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    GeneroPipe,
    EstadoPipe
  ]
})
export class AppModule { }