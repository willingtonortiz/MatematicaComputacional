import { Injectable } from '@angular/core';
import { CuentaComponent } from '../cuentas/cuenta/cuenta.component';
import { CuentasComponent } from '../cuentas/cuentas/cuentas.component';

@Injectable({
	providedIn: 'root'
})

export class PinService {
	public static cuentas: CuentasComponent = null;
	public static pin: string = '';
	public static actual: string = '';
	public static intento: string = '';

	constructor() { }
}
