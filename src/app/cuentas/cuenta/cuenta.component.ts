import { Component, OnInit, Input } from '@angular/core';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';

@Component({
	selector: 'app-cuenta',
	templateUrl: './cuenta.component.html',
	styleUrls: ['./cuenta.component.scss'],
})

export class CuentaComponent implements OnInit {
	@Input('cuenta') cuenta: CCuenta;
	public escondido: boolean = true;
	private enigma: CEnigma;

	constructor() {
		this.enigma = CEnigma.getInstancia(0, 0, 0);
	}

	ngOnInit() {
		this.cuenta.usuario = this.enigma.cifrarTexto(this.cuenta.usuario);
		// console.log(this.usuario);
		this.cuenta.contrasenia = this.enigma.cifrarTexto(this.cuenta.contrasenia);
		// console.log(this.contrasenia);
	}

	public cifrarAlgo() {
		this.escondido = !this.escondido;
		// let cadenaOriginal: string = '';
		// let cadenaCifrada: string = '';
		// for (let i = 0; i < cadenaOriginal.length; ++i) {
		// 	cadenaCifrada += this.enigma.cifrar(cadenaOriginal[i]);
		// }
		// console.log(cadenaCifrada);
	}
}
