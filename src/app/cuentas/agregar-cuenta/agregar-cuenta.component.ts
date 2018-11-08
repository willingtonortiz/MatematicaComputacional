import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CuentasService } from "../../Servicios/cuentas.service";
import { PersonaService } from "../../Servicios/persona.service";
// import { Cuenta } from "../../Servicios/model"

import { CEnigma } from "src/app/Clases/Enigma/CEnigma";
import { Cuenta } from "src/app/Clases/Cuenta/Cuenta";


import {PinService} from "../../Servicios/pin.service"
import {CEncriptador} from "../../Clases/Encriptador/CEncriptador"

@Component({
	selector: "app-agregar-cuenta",
	templateUrl: "./agregar-cuenta.component.html",
	styleUrls: ["./agregar-cuenta.component.scss"]
})

export class AgregarCuentaComponent {
	private encriptador:CEncriptador;
	public cuenta: Cuenta;

	constructor(
		private router: Router,
		private cuentasServicio: CuentasService
	) {
		this.encriptador=new CEncriptador();
	}

	onSubmit(form: NgForm) {
		if (form.value.tipo === "" ||
			// form.value.descripcion === "" ||
			form.value.usuario === "" ||
			form.value.contrasenia === "") {
			alert('Debe llenar todos los campos');
		}
		else {
			// Creando cuenta
			// this.cuenta.id = PersonaService.uid;
			this.cuenta = new Cuenta();

			this.cuenta.tipo = form.value.tipo;
			this.cuenta.usuario = form.value.usuario;
			this.cuenta.contrasenia = form.value.contrasenia;

			// Se encripta la cuenta

			this.cuenta.usuario=this.encriptador.encriptar(this.cuenta.usuario,PinService.pin);
			this.cuenta.contrasenia=this.encriptador.encriptar(this.cuenta.contrasenia,PinService.pin);

			// Se agrega la cuenta
			this.cuentasServicio.addCuenta(this.cuenta.getSimple());
			this.router.navigate(['cuentas']);
		}
	}
}
