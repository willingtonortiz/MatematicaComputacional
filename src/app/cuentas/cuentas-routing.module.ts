/* MODULOS */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';
import { AgregarCuentaComponent } from './agregar-cuenta/agregar-cuenta.component';

/* COMPONENTES */

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full', },
    { path: 'inicio', component: CuentasComponent, },
    { path: 'agregar', component: AgregarCuentaComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CuentasRoutingModule { }
