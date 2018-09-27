import { Component, OnInit, Input } from '@angular/core';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { CRotorPosicion } from '../../Clases/Enigma/CRotorPosicion';
import { CuentasComponent} from '../cuentas/cuentas.component'
@Component({
	selector: 'app-cuenta',
	templateUrl: './cuenta.component.html',
	styleUrls: ['./cuenta.component.scss'],
})

export class CuentaComponent implements OnInit {
	@Input('cuenta') cuenta: CCuenta;
	public escondido: boolean = true;
	private enigma: CEnigma;

	constructor( _cuentasComponent: CuentasComponent) {
		this.enigma = CEnigma.getInstancia(0, 0, 0);
		

	}

	ngOnInit() {
		this.cuenta.usuario = this.enigma.cifrarTexto(this.cuenta.usuario);
		this.cuenta.contrasenia = this.enigma.cifrarTexto(this.cuenta.contrasenia);
	}

	public toggleCuenta() {
		this.escondido = !this.escondido;
	}

	public desencriptar() {
		this.cuenta.usuario = this.enigma.cifrarTexto(this.cuenta.usuario);
		this.cuenta.contrasenia = this.enigma.cifrarTexto(this.cuenta.contrasenia);
	}

	public mostraModalPin(){
		
	}
}
