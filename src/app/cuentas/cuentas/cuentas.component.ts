import { Component, OnInit } from '@angular/core';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { CRotorPosicion } from '../../Clases/Enigma/CRotorPosicion';
import { CEnigma } from '../../Clases/Enigma/CEnigma';

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit {

	public cuentas: Array<CCuenta> = [
		new CCuenta('Facebook', 'USUARIOA', 'CONTRAA'),
		new CCuenta('Spotify', 'USUARIOB', 'CONTRAB'),
		new CCuenta('Twitter', 'USUARIOC', 'CONTRAC'),
		new CCuenta('Seguridad', 'USUARIOD', 'CONTRAD'),
		new CCuenta('UPC', 'u20161c963@upc.edu.pe', 'contraseñaGenérica'),
		new CCuenta('UPC', 'u20161c808@upc.edu.pe', 'monkeyGoHappy'),
		new CCuenta('UPC', 'u20161c135@upc.edu.pe', 'contraseñaInventada')
	];

	constructor() {
		let asd: CRotorPosicion = new CRotorPosicion();
		let rotorI: number = asd.transformar("123456");
		let rotorII: number = asd.transformar("123456");
		let rotorIII: number = asd.transformar("123456");
		console.log(rotorI, rotorII, rotorIII);
		let enigma: CEnigma = CEnigma.getInstancia(rotorI, rotorII, rotorIII);
	}

	ngOnInit() { }

}
