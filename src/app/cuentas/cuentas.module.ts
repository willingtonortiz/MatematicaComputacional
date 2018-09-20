/* MODULOS */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasRoutingModule } from "./cuentas-routing.module";
import { CuentaComponent } from './cuenta/cuenta.component';
import { CuentasComponent } from './cuentas/cuentas.component';

/* COMPONENTES */

@NgModule({
    imports: [
        CommonModule,
        CuentasRoutingModule,
    ],
    declarations: [

    CuentaComponent,

    CuentasComponent]
})

export class CuentasModule { }
