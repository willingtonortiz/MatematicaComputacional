import { Injectable } from '@angular/core';
import { CCuenta } from '../Clases/Cuenta/CCuenta';

@Injectable({
	providedIn: 'root'
})

export class CuentasService {

	// private cuentas: Array<CCuenta> = [
	// 	new CCuenta('Facebook', 'USUARIOA', 'CONTRAA'),
	// 	new CCuenta('Spotify', 'USUARIOB', 'CONTRAB'),
	// 	new CCuenta('Twitter', 'USUARIOC', 'CONTRAC'),
	// 	new CCuenta('Seguridad', 'USUARIOD', 'CONTRAD'),
	// 	new CCuenta('UPC', 'u20161c963@upc.edu.pe', 'contraseñaGenérica'),
	// 	new CCuenta('UPC', 'u20161c808@upc.edu.pe', 'monkeyGoHappy'),
	// 	new CCuenta('UPC', 'u20161c135@upc.edu.pe', 'contraseñaInventada')
	// ];

	private cuentas: Array<CCuenta> = [
		new CCuenta('Facebook', '>μS_￦ûÙì', '°ÑnÌ￦"Ã'),
		new CCuenta('Spotify', '>μS_￦ûÙ_', '°ÑnÌ￦"{'),
		new CCuenta('Twitter', '>μS_￦ûÙp', '°ÑnÌ￦"Ä'),
		new CCuenta('Seguridad', '>μS_￦ûÙ{', '°ÑnÌ￦"b'),
		new CCuenta('UPC', 'W¬è0rr]ÃívØÄL^jïæ¿Ö¤#', 'Î\'Nk6ÜæöÒLèÀ}=¥}5£'),
		new CCuenta('UPC', 'W¬è0rr]ê÷€ØÄL^jïæ¿Ö¤#', 'À\'NtÁ`Ωè|Lß&ô'),
		new CCuenta('UPC', 'W¬è0rr]Æ4ëØÄL^jïæ¿Ö¤#', 'Î\'Nk6ÜæöÒL£"úÇDWÎËë')
	];

	public getCuentas(): Array<CCuenta> {
		return this.cuentas;
	}

	public addCuenta(item: CCuenta): void {
		this.cuentas.push(item);
	}

	constructor() { }
}
