import { Injectable } from '@angular/core';
import { CuentaComponent } from '../cuentas/cuenta/cuenta.component';

@Injectable({
	providedIn: 'root'
})

export class PinService {
	public static pin: string = '123456';
	public static actual: number = -1;
	public static intento: number = -1;

	constructor() { }
}
