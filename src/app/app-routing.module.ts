import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CuentasComponent } from './cuentas/cuentas/cuentas.component';
// import { CabeceraComponent } from "./inicio/cabecera/cabecera.component";

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', loadChildren: './inicio/inicio.module#InicioModule' },
    { path: 'cuentas', loadChildren: './cuentas/cuentas.module#CuentasModule' },

    // { path: 'inicio', component: CabeceraComponent },
    // { path: 'cuentas', component: CuentasComponent },
    // { path: 'pin', redirectTo: './cuentas/centas.module#pin' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
