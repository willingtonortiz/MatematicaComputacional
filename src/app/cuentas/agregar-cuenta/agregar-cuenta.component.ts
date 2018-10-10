import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CuentasService } from "../../Servicios/cuentas.service";
import { CCuenta } from "../../Clases/Cuenta/CCuenta";

@Component({
	selector: "app-agregar-cuenta",
	templateUrl: "./agregar-cuenta.component.html",
	styleUrls: ["./agregar-cuenta.component.scss"]
})
export class AgregarCuentaComponent implements OnInit {

	constructor(private router: Router, private cuentasServicio: CuentasService) { }

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		if (form.value.tipo === "" ||
			form.value.descripcion === "" ||
			form.value.usuario === "" ||
			form.value.contrasenia === "") {
			alert("Debe llenar todos los campos");
		}
		else {
			let item: CCuenta = new CCuenta(
				form.value.tipo,
				form.value.usuario,
				form.value.contrasenia
			);
			this.cuentasServicio.addCuenta(item);
			this.router.navigate(['cuentas', 'inicio']);
		}
	}

}
