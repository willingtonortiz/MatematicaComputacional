import { Component, OnInit } from '@angular/core';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { CRotorPosicion } from '../../Clases/Enigma/CRotorPosicion';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CuentasService } from '../../Servicios/cuentas.service';

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit {
	public showPinModal: boolean = false;
	private cuentas: Array<CCuenta>;

	constructor(private cuentasServicio: CuentasService) {
		this.cuentas = cuentasServicio.getCuentas();
		let asd: CRotorPosicion = new CRotorPosicion();
		let rotorI: number = asd.transformar("123456");
		let rotorII: number = asd.transformar("123456");
		let rotorIII: number = asd.transformar("123456");
		let enigma: CEnigma = CEnigma.getInstancia(rotorI, rotorII, rotorIII);
	}

	ngOnInit() { }

}
