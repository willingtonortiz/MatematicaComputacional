import { Component, OnInit, Input } from '@angular/core';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { Router } from '@angular/router';
import { PinService } from '../../Servicios/pin.service';
//import {Cuenta } 

@Component({
	selector: 'app-cuenta',
	templateUrl: './cuenta.component.html',
	styleUrls: ['./cuenta.component.scss'],
})

export class CuentaComponent implements OnInit {
	@Input('id') id: number;
	@Input('tipo') tipo:string;
	@Input('usuario') usuario:string;
	@Input('contrasenia') contrasenia:string;
//	@Input('cuenta') cuenta: CCuenta;
	private activo: boolean;
	private escondido: boolean = true;
	private enigma: CEnigma;

	constructor(private router: Router) {
		this.activo = false;
		this.enigma = CEnigma.getInstancia(0, 0, 0);
	}

	ngOnInit() {
		
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
