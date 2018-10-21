import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { PinService } from "../../Servicios/pin.service";
import { PersonaService } from "../../Servicios/persona.service";
import { CRotorPosicion } from "src/app/Clases/Enigma/CRotorPosicion";
import { CEnigma } from "src/app/Clases/Enigma/CEnigma";

@Component({
	selector: "app-pin",
	templateUrl: "./pin.component.html",
	styleUrls: ["./pin.component.scss"]
})

export class PinComponent implements OnInit, AfterViewInit {
	public pinfieldcode1: string = "";
	public pinfieldcode2: string = "";
	public pinfieldcode3: string = "";
	public pinfieldcode4: string = "";
	public pinfieldcode5: string = "";
	public pinfieldcode6: string = "";
	@ViewChild("pinref1") nameElementRef1: ElementRef;
	@ViewChild("pinref2") nameElementRef2: ElementRef;
	@ViewChild("pinref3") nameElementRef3: ElementRef;
	@ViewChild("pinref4") nameElementRef4: ElementRef;
	@ViewChild("pinref5") nameElementRef5: ElementRef;
	@ViewChild("pinref6") nameElementRef6: ElementRef;
	public contador = 0;
	public nuevo: boolean = false;
	public lista: string[] = ["1", "2"];

	constructor(private router: Router) {
		// this.nuevo = Boolean(localStorage.getItem("nuevo"));
		console.log("Se creó el componente");
		this.nuevo = PersonaService.nuevo;
		// this.nuevo = true;
	}

	ngOnInit(): void {

		console.log("Se inicializó el componente");
	}

	ngAfterViewInit(): void {
		// this.nuevo = Boolean(localStorage.getItem("nuevo"));
		// this.nuevo = this.personaService.nuevo;
		console.log("Se cargó la vista del componente");
		this.nameElementRef1.nativeElement.focus();
	}

	focusNext2(): void {
		if (this.pinfieldcode1.length === 1) {
			this.nameElementRef2.nativeElement.focus();
		}
	}
	focusNext3(): void {
		if (this.pinfieldcode2.length === 1) {
			this.nameElementRef3.nativeElement.focus();
		}
	}
	focusNext4(): void {
		if (this.pinfieldcode3.length === 1) {
			this.nameElementRef4.nativeElement.focus();
		}
	}
	focusNext5(): void {
		if (this.pinfieldcode4.length === 1) {
			this.nameElementRef5.nativeElement.focus();
		}
	}
	focusNext6(): void {
		if (this.pinfieldcode5.length === 1) {
			this.nameElementRef6.nativeElement.focus();
		}
	}

	// public generarPin() {
	// 	let pines = document.getElementsByClassName('input-pincode');
	// 	let cadena: string = '';
	// 	for (let i = 0; i < pines.length; ++i) {
	// 		cadena += (<HTMLInputElement>pines[i]).value;
	// 	}

	// 	this.pinService.pin = cadena;
	// 	console.log(this.pinService.pin);
	// 	// localStorage.setItem('nuevo', 'true');
	// 	this.router.navigate(['cuentas', 'inicio']);
	// }

	// public procesarPin() {
	// 	let pines = document.getElementsByClassName('input-pincode');
	// 	let cadena: string = '';
	// 	for (let i = 0; i < pines.length; ++i) {
	// 		cadena += (<HTMLInputElement>pines[i]).value;
	// 	}

	// 	if (cadena === this.pinService.pin) {
	// 		this.pinService.actual = this.pinService.intento;
	// 	}
	// 	else {
	// 		alert("Ingresó un pin incorrecto");
	// 	}
	// 	this.router.navigate(['cuentas', 'inicio']);
	// }

	public procesarPin(): void {
		// Obtencion del pin
		// FALTA VERIFICAR
		let pines = document.getElementsByClassName('input-pincode');
		let cadena: string = '';
		for (let i = 0; i < pines.length; ++i) {
			cadena += (<HTMLInputElement>pines[i]).value;
		}

		// Si entra por primera vez, es necesario que ingrese el pin, para guardar los datos con este
		// a su vez crear a enigma por primera vez
		if (this.nuevo) {
			PinService.pin = cadena;
			let rotorPosition: CRotorPosicion = new CRotorPosicion();
			let rotorI: number = rotorPosition.transformar(cadena);
			let rotorII: number = rotorPosition.transformar(cadena);
			let rotorIII: number = rotorPosition.transformar(cadena);
			let enigma: CEnigma = CEnigma.getInstancia(rotorI, rotorII, rotorIII);
		}
		// Si no es nuevo, significa que el usuario desea desencriptar una cuenta
		else {
			PinService.cuentas.metodo();
			if (cadena === PinService.pin) {
				PinService.actual = PinService.intento;
			}
			else {
				alert("Ingresó un pin incorrecto");
			}

		}

		// Sea nuevo o no, el usuario debe regresar a las cuentas
		this.router.navigate(['cuentas']);

		// if (cadena === this.pinService.pin) {
		// 	this.pinService.actual = this.pinService.intento;
		// }
		// else {
		// 	alert("Ingresó un pin incorrecto");
		// }
	}
}
