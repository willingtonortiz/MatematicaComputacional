import { Component, OnInit } from "@angular/core";
import { PinService } from "../../Servicios/pin.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-pin",
	templateUrl: "./pin.component.html",
	styleUrls: ["./pin.component.scss"]
})

export class PinComponent implements OnInit {
	constructor(
		private router: Router
	) { }

	ngOnInit() {
		// this.effectoFocusForm();
		// this.mostrarPin();
		// this.vaciarInputs();
	}

	public effectoFocusForm() {
		// let inputsField = document.getElementsByClassName("input-pincode");
		// for (let i = 0; i < inputsField.length; ++i) {
		// 	inputsField[i].addEventListener("input", () => {
		// 		if (
		// 			inputsField[i].nodevalue.length === 1 &&
		// 			inputsField[i].value !== " "
		// 		) {
		// 			if (i + 1 !== inputsField.length) {
		// 				inputsField[i + 1].focus();
		// 			}
		// 		} else {
		// 			console.log("No pongas espacios puto");
		// 		}
		// 	});
		// }
	}

	public mostrarPin() {
		// let pin = "";
		// document.getElementById("send-pin").addEventListener("click", () => {
		// 	let inputsField = document.getElementsByClassName("input-pincode");
		// 	for (let i = 0; i < inputsField.length; ++i) {
		// 		pin += inputsField[i].value;
		// 	}
		// 	if (pin.length === 6) {
		// 		let valido = true;
		// 		for (let i = 0; i < 6; ++i) {
		// 			if (pin[i] === " ") {
		// 				valido = false;
		// 			}
		// 		}
		// 		if (valido) {
		// 			console.log(pin);
		// 		} else {
		// 			console.log("PIN INVÁLIDO");
		// 		}
		// 	} else {
		// 		this.vaciarInputs();
		// 	}
		// });
	}

	public vaciarInputs() {
		// let inputsField = document.getElementsByClassName("field");
		// for (let i = 0; i < inputsField.length; ++i) {
		// 	inputsField[i].value = "";
		// }
	}

	public procesarPin() {
		let pines = document.getElementsByClassName('input-pincode');
		let cadena: string = '';
		for (let i = 0; i < pines.length; ++i) {
			cadena += (<HTMLInputElement>pines[i]).value;
		}

		if (cadena === PinService.pin) {
			PinService.actual = PinService.intento;
			this.router.navigate(['cuentas', 'inicio']);
		}
	}
}
