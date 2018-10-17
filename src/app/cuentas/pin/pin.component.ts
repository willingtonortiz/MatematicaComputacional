import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { PinService } from "../../Servicios/pin.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-pin",
	templateUrl: "./pin.component.html",
	styleUrls: ["./pin.component.scss"]
})

export class PinComponent implements AfterViewInit {
	private contador = 0;
	private pinfieldcode1 = ''
	private pinfieldcode2 = ''
	private pinfieldcode3 = ''
	private pinfieldcode4 = ''
	private pinfieldcode5 = ''
	private pinfieldcode6 = ''
	@ViewChild('pinref1') nameElementRef1: ElementRef;
	@ViewChild('pinref2') nameElementRef2: ElementRef;
	@ViewChild('pinref3') nameElementRef3: ElementRef;
	@ViewChild('pinref4') nameElementRef4: ElementRef;
	@ViewChild('pinref5') nameElementRef5: ElementRef;
	@ViewChild('pinref6') nameElementRef6: ElementRef;

	public lista: any[] = [
		"1", "2"
	];

	constructor(private router: Router) {

	}

	ngAfterViewInit() {
		this.nameElementRef1.nativeElement.focus();
	}

	focusNext2() {
		if (this.pinfieldcode1.length == 1) {
			this.nameElementRef2.nativeElement.focus();
		}
	}

	focusNext3() {
		if (this.pinfieldcode2.length == 1) {
			this.nameElementRef3.nativeElement.focus();
		}
	}

	focusNext4() {
		if (this.pinfieldcode3.length == 1) {
			this.nameElementRef4.nativeElement.focus();
		}
	}

	focusNext5() {
		if (this.pinfieldcode4.length == 1) {
			this.nameElementRef5.nativeElement.focus();
		}
	}

	focusNext6() {
		if (this.pinfieldcode5.length == 1) {
			this.nameElementRef6.nativeElement.focus();
		}
	}

	public procesarPin() {
		let pines = document.getElementsByClassName('input-pincode');
		let cadena: string = '';
		for (let i = 0; i < pines.length; ++i) {
			cadena += (<HTMLInputElement>pines[i]).value;
		}

		if (cadena === PinService.pin) {
			PinService.actual = PinService.intento;
		}
		else {
			alert("Ingresó un pin incorrecto");
		}
		this.router.navigate(['cuentas', 'inicio']);
	}
}
