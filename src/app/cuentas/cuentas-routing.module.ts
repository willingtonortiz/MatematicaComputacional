/* MODULOS */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';

/* COMPONENTES */

const routes: Routes = [
    { path: '', component: CuentasComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CuentasRoutingModule { }
