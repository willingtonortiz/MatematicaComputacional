import { Component } from '@angular/core';
// import { Cuenta } from "../../Servicios/model"
import { Cuenta } from 'src/app/Clases/Cuenta/Cuenta';
import { CuentasService } from '../../Servicios/cuentas.service';
import { ArrCuentas } from 'src/app/Clases/Cuenta/ArrCuentas';
// import { PinService } from 'src/app/Servicios/pin.service';

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss'],
	providers: [CuentasService]
})

export class CuentasComponent {
	public showPinModal: boolean = false;
	public cuentas: Array<Cuenta> = null;
	private arrCuentas: ArrCuentas = null;

	constructor(private cuentasServicio: CuentasService) {
		this.arrCuentas = ArrCuentas.getInstancia();

		this.cuentasServicio.getCuentas().subscribe((items) => {
			this.cuentas = null;
			this.cuentas = new Array<Cuenta>();
			items.forEach((data: any) => {
				let temp = data.payload.doc.data() as Cuenta;
				temp.id = data.payload.doc.id;
				this.cuentas.push(temp);
			})

			this.arrCuentas.setCuentas(this.cuentas);
		});

	}
}
