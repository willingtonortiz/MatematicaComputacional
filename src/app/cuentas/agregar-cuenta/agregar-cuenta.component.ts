import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CuentasService } from "../../Servicios/cuentas.service";
import { PersonaService } from "../../Servicios/persona.service";
import { CCuenta } from "../../Clases/Cuenta/CCuenta";
import {Cuenta} from "../../Servicios/model"

@Component({
	selector: "app-agregar-cuenta",
	templateUrl: "./agregar-cuenta.component.html",
	styleUrls: ["./agregar-cuenta.component.scss"]
})
export class AgregarCuentaComponent implements OnInit {

	constructor(private router: Router, private cuentasServicio: CuentasService,private personaservice:PersonaService) { }
	cuenta : Cuenta=
	{
		tipo:"",
		usuario:"",
		contrasenia:"",
	}
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
			
				this.cuenta.tipo=form.value.tipo,
				this.cuenta.usuario=form.value.usuario,
				this.cuenta.contrasenia=form.value.contrasenia
				this.cuenta.id=this.personaservice.uid;
			this.cuentasServicio.addCuenta(this.cuenta);
			this.router.navigate(['cuentas', 'inicio']);
		}
	}

}
