import { Component, OnInit, Input } from '@angular/core';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { Router } from '@angular/router';
import { PinService } from '../../Servicios/pin.service';

@Component({
	selector: 'app-cuenta',
	templateUrl: './cuenta.component.html',
	styleUrls: ['./cuenta.component.scss'],
})

export class CuentaComponent implements OnInit {
	@Input('id') id: number;
	@Input('cuenta') cuenta: CCuenta;

	private tipo: string;
	private usuario: string;
	private contrasenia: string;

	private activo: boolean;
	private escondido: boolean = true;
	private enigma: CEnigma;

	constructor(private router: Router) {
		this.activo = false;
		this.enigma = CEnigma.getInstancia(0, 0, 0);
	}

	ngOnInit() {
		this.tipo = this.cuenta.tipo;
		this.usuario = this.cuenta.usuario;
		this.contrasenia = this.cuenta.contrasenia;
		if (this.id === PinService.actual) {
			this.desencriptar();
			this.activo = true;
		}
	}

	public toggleCuenta() {
		this.escondido = !this.escondido;
	}

	public desencriptar() {
		this.usuario = this.enigma.cifrarTexto(this.usuario);
		this.contrasenia = this.enigma.cifrarTexto(this.contrasenia);
	}

	public procesarPin() {
		if (!this.activo) {
			PinService.intento = this.id;
			this.router.navigate(['cuentas', 'pin']);
		}
		else {
			this.desencriptar();
			this.activo = false;
			// PinService.actual = -1;
		}
	}
}
