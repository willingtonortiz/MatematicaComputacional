import { Component } from '@angular/core';
import { Cuenta } from "../../Servicios/model"
import { CuentasService } from '../../Servicios/cuentas.service';
import { PinService } from 'src/app/Servicios/pin.service';

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss'],
	providers: [CuentasService]
})

export class CuentasComponent {
	public showPinModal: boolean = false;
	public cuentas: Array<Cuenta> = null;

	constructor(private cuentasServicio: CuentasService) {
		this.cuentasServicio.getCuentas().subscribe((item) => {
			this.cuentas = null;
			this.cuentas = new Array<Cuenta>();
			item.forEach((data: any) => {
				let temp = data.payload.doc.data() as Cuenta;
				temp.id = data.payload.doc.id;
				this.cuentas.push(temp);
			})
		});
	}
}
