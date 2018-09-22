/* MODULOS */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasRoutingModule } from "./cuentas-routing.module";
import { CuentaComponent } from './cuenta/cuenta.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AgregarCuentaComponent } from './agregar-cuenta/agregar-cuenta.component';

/* COMPONENTES */

@NgModule({
    imports: [
        CommonModule,
        CuentasRoutingModule,
    ],
    declarations: [

    CuentaComponent,

    CuentasComponent,

    AgregarCuentaComponent]
})

export class CuentasModule { }
