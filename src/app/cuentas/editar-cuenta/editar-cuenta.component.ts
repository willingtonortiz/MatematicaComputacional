import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/Clases/Cuenta/Cuenta';
import { CEnigma } from 'src/app/Clases/Enigma/CEnigma';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CuentasService } from 'src/app/Servicios/cuentas.service';
// import { PersonaService } from 'src/app/Servicios/persona.service';
import { ArrCuentas } from 'src/app/Clases/Cuenta/ArrCuentas';

@Component({
	selector: 'app-editar-cuenta',
	templateUrl: './editar-cuenta.component.html',
	styleUrls: ['./editar-cuenta.component.scss']
})

export class EditarCuentaComponent implements OnInit {
	private arrCuentas: ArrCuentas;
	private cuenta: Cuenta;
	private enigma: CEnigma;

	constructor(private router: Router,
		private cuentasService: CuentasService
	) {
		this.enigma = CEnigma.getInstancia(0, 0, 0);
		this.arrCuentas = ArrCuentas.getInstancia();
		this.cuenta = this.arrCuentas.getActual();
		
		this.cuenta.usuario = this.enigma.cifrarTexto(this.cuenta.usuario);
		this.cuenta.contrasenia = this.enigma.cifrarTexto(this.cuenta.contrasenia);
	}

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		let datos = form.value;
		if (datos.tipo === "" ||
			datos.usuario === "" ||
			datos.contrasenia === "") {
			alert("Debe llenar todos los campos");
		}
		else {
			// this.cuenta.id = PersonaService.uid;
			this.cuenta.tipo = datos.tipo;
			this.cuenta.usuario = this.enigma.cifrarTexto(datos.usuario);
			this.cuenta.contrasenia = this.enigma.cifrarTexto(datos.contrasenia);

			this.cuentasService.updateCuenta(this.cuenta);

			this.router.navigate(['cuentas']);
		}
	}
}
