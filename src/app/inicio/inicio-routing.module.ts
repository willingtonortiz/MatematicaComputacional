/* MODULOS */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* COMPONENTES */
import { CabeceraComponent } from './cabecera/cabecera.component';

const routes: Routes = [
    { path: '', component: CabeceraComponent, }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InicioRoutingModule { }
