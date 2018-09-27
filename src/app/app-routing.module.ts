import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
    { path: 'cuentas', loadChildren: './cuentas/cuentas.module#CuentasModule' },
    { path: 'pin', redirectTo:'./cuentas/centas.module#pin'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
