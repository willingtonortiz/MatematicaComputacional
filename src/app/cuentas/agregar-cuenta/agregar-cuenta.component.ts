import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CuentasService } from "../../Servicios/cuentas.service";
import { PersonaService } from "../../Servicios/persona.service";
// import { CCuenta } from "../../Clases/Cuenta/CCuenta";
import { Cuenta } from "../../Servicios/model"

@Component({
	selector: "app-agregar-cuenta",
	templateUrl: "./agregar-cuenta.component.html",
	styleUrls: ["./agregar-cuenta.component.scss"]
})

export class AgregarCuentaComponent implements OnInit {

	public cuenta: Cuenta = {
		id: '',
		tipo: '',
		usuario: '',
		contrasenia: '',
	}

	constructor(
		private router: Router,
		private cuentasServicio: CuentasService
	) {
	}

	ngOnInit() {
	}

	onSubmit(form: NgForm) {

		console.log('Llegué aquí');
		console.log(form);
		console.log(form.value);
		console.log(form.value.tipo);
		console.log(form.value.usuario);
		console.log(form.value.contrasenia);
		if (form.value.tipo === '' ||
			// form.value.descripcion === '' ||
			form.value.usuario === '' ||
			form.value.contrasenia === '') {
			alert('Debe llenar todos los campos');
		}
		else {
			// Creando cuenta
			this.cuenta.id = PersonaService.uid;
			this.cuenta.tipo = form.value.tipo;
			this.cuenta.usuario = form.value.usuario;
			this.cuenta.contrasenia = form.value.contrasenia;
			console.log(this.cuenta);
			// Se agrega la cuenta
			// this.cuentasServicio.addCuenta(this.cuenta);
			// this.router.navigate(['cuentas']);
		}
	}
}
