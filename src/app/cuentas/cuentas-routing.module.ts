/* MODULOS */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AgregarCuentaComponent } from './agregar-cuenta/agregar-cuenta.component';
import { PinComponent } from './pin/pin.component'
import { EditarCuentaComponent } from './editar-cuenta/editar-cuenta.component';

/* COMPONENTES */

const routes: Routes = [
    { path: "", redirectTo: "inicio", pathMatch: "full" },
    { path: "inicio", component: CuentasComponent },
    { path: "agregar", component: AgregarCuentaComponent },
    { path: "editar", component: EditarCuentaComponent },
    { path: "pin", component: PinComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CuentasRoutingModule { }
