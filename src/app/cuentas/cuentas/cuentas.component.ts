/* Componentes */
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";

/* Clases */
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { CRotorPosicion } from '../../Clases/Enigma/CRotorPosicion';
import { CEnigma } from '../../Clases/Enigma/CEnigma';

/* Servicios */
import { BaseDatosService } from '../../Servicios/base-datos.service'

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit {
	public showPinModal: boolean = false;
	private cuentas: Array<CCuenta> = null;

	constructor(public cuentaServicio: BaseDatosService) {

		// this.cuentas = cuentasServicio.getCuentas();
		let asd: CRotorPosicion = new CRotorPosicion();
		let rotorI: number = asd.transformar("123456");
		let rotorII: number = asd.transformar("123456");
		let rotorIII: number = asd.transformar("123456");
		let enigma: CEnigma = CEnigma.getInstancia(rotorI, rotorII, rotorIII);

	}

	ngOnInit(): void {
		// this.cuentaServicio.GetCuentas().subscribe(item => {
		// 	this.cuentas = item;
		// })

		this.cuentaServicio.GetCuentas().subscribe((item) => {
			this.cuentas = new Array<CCuenta>();
			item.forEach((data: any) => {
				let temp = data.payload.doc.data() as CCuenta;
				temp.id = data.payload.doc.id;
				this.cuentas.push(temp);
			})
		});
	}
}
