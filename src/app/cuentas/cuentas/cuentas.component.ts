import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../Servicios/cuentas.service';
import { Cuenta } from "../../Servicios/model"
import { Router } from "@angular/router";
import { PinService } from 'src/app/Servicios/pin.service';

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss'],
	providers: [CuentasService]
})

export class CuentasComponent implements OnInit {
	public showPinModal: boolean = false;
	public cuentas: Array<Cuenta> = null;

	constructor(
		private cuentasServicio: CuentasService,
		private router: Router
	) {
		this.cuentasServicio.getCuentas().subscribe((item) => {
			this.cuentas = null;
			this.cuentas = new Array<Cuenta>();
			item.forEach((data: any) => {
				let temp = data.payload.doc.data() as Cuenta;
				temp.id = data.payload.doc.id;
				this.cuentas.push(temp);
			})
		});
		PinService.cuentas = this;
	}

	public metodo() {
		console.log('Esto es un método');
	}

	ngOnInit(): void {

	}
}
