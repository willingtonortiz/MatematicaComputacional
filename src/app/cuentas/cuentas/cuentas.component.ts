import { Component, OnInit } from '@angular/core';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';

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
		new CCuenta('UPC', 'USUARIOE', 'CONTRAE'),
		new CCuenta('UPC', 'USUARIOF', 'CONTRAF'),
		new CCuenta('UPC', 'USUARIOG', 'CONTRAH')
	];

	constructor() { }

	ngOnInit() { }

}
