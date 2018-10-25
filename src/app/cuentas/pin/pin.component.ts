import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
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

export class PinComponent implements AfterViewInit {
	private pinfieldcode1: string = "";
	private pinfieldcode2: string = "";
	private pinfieldcode3: string = "";
	private pinfieldcode4: string = "";
	private pinfieldcode5: string = "";
	private pinfieldcode6: string = "";
	@ViewChild("pinref1") nameElementRef1: ElementRef;
	@ViewChild("pinref2") nameElementRef2: ElementRef;
	@ViewChild("pinref3") nameElementRef3: ElementRef;
	@ViewChild("pinref4") nameElementRef4: ElementRef;
	@ViewChild("pinref5") nameElementRef5: ElementRef;
	@ViewChild("pinref6") nameElementRef6: ElementRef;
	private nuevo: boolean = false;

	constructor(private router: Router) {
		this.nuevo = PersonaService.nuevo;
		if (PersonaService.nuevo) {
			PersonaService.nuevo = false;
		}
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
				PinService.actual = PinService.intento;
			}
			else {
				alert("Ingresó un pin incorrecto");
			}
		}

		this.router.navigate(["cuentas"]);
	}
}
