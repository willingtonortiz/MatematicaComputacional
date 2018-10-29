import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { PinService } from "../../Servicios/pin.service";
import { PersonaService } from "../../Servicios/persona.service";
import { CRotorPosicion } from "src/app/Clases/Enigma/CRotorPosicion";
import { ArrCuentas } from "src/app/Clases/Cuenta/ArrCuentas";
import { CEnigma } from "src/app/Clases/Enigma/CEnigma";

@Component({
	selector: "app-pin",
	templateUrl: "./pin.component.html",
	styleUrls: ["./pin.component.scss"]
})

export class PinComponent implements AfterViewInit {
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
	private nuevo: boolean = false;

	private arrCuentas: ArrCuentas;

	constructor(private router: Router) {
		this.nuevo = PersonaService.nuevo;
		if (PersonaService.nuevo) {
			PersonaService.nuevo = false;
		}
		this.arrCuentas = ArrCuentas.getInstancia();
	}

	ngAfterViewInit(): void {
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
			if (cadena === PinService.pin) {
				switch (PinService.tipo) {
					case "editar": {
						this.router.navigate(["/cuentas", "editar"]);
						return;
					};
					case "desencriptar": {
						// PinService.actual = PinService.intento;
						this.arrCuentas.desencriptarActual();
					} break;
				}
			}
			else {
				alert("Ingresó un pin incorrecto");
			}
		}
		this.router.navigate(["cuentas"]);
	}
}
