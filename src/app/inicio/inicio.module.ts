import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioRoutingModule } from './inicio-routing.module';
import {AuthenticationService}  from '../Servicios/authentication.service';
import {PersonaService}  from '../Servicios/persona.service';
@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
  ],
  declarations: [
    CabeceraComponent,
  ],
  providers: [AuthenticationService,PersonaService],
})
export class InicioModule { }
