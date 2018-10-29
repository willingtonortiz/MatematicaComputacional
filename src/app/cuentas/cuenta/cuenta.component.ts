import { Component, OnInit, Input } from '@angular/core';
// import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { Router } from '@angular/router';
import { PinService } from '../../Servicios/pin.service';
import { CuentasService } from '../../Servicios/cuentas.service';
import { ArrCuentas } from 'src/app/Clases/Cuenta/ArrCuentas';
import { Cuenta } from 'src/app/Clases/Cuenta/Cuenta';

@Component({
	selector: 'app-cuenta',
	templateUrl: './cuenta.component.html',
	styleUrls: ['./cuenta.component.scss']
})

export class CuentaComponent implements OnInit {
	@Input('cuenta') cuenta: Cuenta;

	private arrCuentas: ArrCuentas;
	private activo: boolean;
	public escondido: boolean = true;

	constructor(
		private router: Router,
		private cuentaservicio: CuentasService
	) {
		this.arrCuentas = ArrCuentas.getInstancia();
		this.activo = false;
	}

	ngOnInit() {
		if (this.cuenta !== undefined && this.arrCuentas.getActual() !== undefined) {
			if (this.cuenta.id === this.arrCuentas.getActual().id) {
				this.escondido = false;
				this.activo = true;
				this.cuenta = this.arrCuentas.getActual();
			}
		}
	}

	public toggleCuenta() {
		this.escondido = !this.escondido;
	}

	public editar() {
		PinService.tipo = "editar";
		this.arrCuentas.setActual(this.cuenta.id);
		this.router.navigate(['/cuentas', 'pin']);
	}

	public eliminar() {
		this.cuentaservicio.deleteCuenta(this.cuenta.id);
	}

	public desencriptar() {
		if (!this.activo) {
			PinService.tipo = "desencriptar";
			this.arrCuentas.setActual(this.cuenta.id);
			this.router.navigate(['/cuentas', 'pin']);
		}
		else {
			this.arrCuentas.desencriptarActual();
			this.cuenta = this.arrCuentas.getActual();
			this.activo = false;
		}
	}
}
