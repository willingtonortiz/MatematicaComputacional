/* MODULOS */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasRoutingModule } from "./cuentas-routing.module";
import { FormsModule } from "@angular/forms";

/* COMPONENTES */
import { CuentaComponent } from './cuenta/cuenta.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AgregarCuentaComponent } from './agregar-cuenta/agregar-cuenta.component';
import { PinComponent } from './pin/pin.component';
import { CuentasService } from '../Servicios/cuentas.service';
import {PersonaService}  from '../Servicios/persona.service';

@NgModule({
    imports: [
        CommonModule,
        CuentasRoutingModule,
        FormsModule,
    ],
    declarations: [
        CuentaComponent,
        CuentasComponent,
        AgregarCuentaComponent,
        PinComponent,
    ],
    providers: [CuentasService],
})

export class CuentasModule { }
