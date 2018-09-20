import { Component, OnInit } from '@angular/core';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit {

	public cuentas: Array<CCuenta> = [
		new CCuenta('FACEBOOK', 'USUARIOA', 'CONTRAA'),
		new CCuenta('SPOTIFY', 'USUARIOB', 'CONTRAB'),
		new CCuenta('TWITTER', 'USUARIOC', 'CONTRAC'),
		new CCuenta('SEGURIDAD', 'USUARIOD', 'CONTRAD'),
		new CCuenta('UPC', 'USUARIOE', 'CONTRAE'),
		new CCuenta('UPC', 'USUARIOF', 'CONTRAF'),
		new CCuenta('UPC', 'USUARIOG', 'CONTRAH')
	];

	constructor() { }

	ngOnInit() { }

}
