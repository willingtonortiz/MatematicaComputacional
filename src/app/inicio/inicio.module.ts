import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
	imports: [
		CommonModule,
		InicioRoutingModule
	],
	declarations: [
		CabeceraComponent
	]
})

export class InicioModule { }
