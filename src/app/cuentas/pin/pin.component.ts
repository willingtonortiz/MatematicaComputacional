import { Component, OnInit, ElementRef,ViewChild,AfterViewInit } from "@angular/core";
import { PinService } from "../../Servicios/pin.service";
import { Router } from "@angular/router";
import {PersonaService} from "../../Servicios/persona.service";

@Component({
	selector: "app-pin",
	templateUrl: "./pin.component.html",
	styleUrls: ["./pin.component.scss"]
})

export class PinComponent implements AfterViewInit {
	contador =0;
	pinfieldcode1 = ''
	pinfieldcode2 = ''
	pinfieldcode3 = ''
	pinfieldcode4 = ''
	pinfieldcode5 = ''
	pinfieldcode6 = ''
	@ViewChild('pinref1') nameElementRef1:ElementRef;
	@ViewChild('pinref2') nameElementRef2:ElementRef;
	@ViewChild('pinref3') nameElementRef3:ElementRef;
	@ViewChild('pinref4') nameElementRef4:ElementRef;
	@ViewChild('pinref5') nameElementRef5:ElementRef;
	@ViewChild('pinref6') nameElementRef6:ElementRef;
	nuevo:boolean=false;
	lista:any[] =[
		"1","2"
	];
	constructor(
		private router: Router,private personaService:PersonaService
	) { 
		console.log(this.nuevo=Boolean(localStorage.getItem("nuevo")));
	}


	ngAfterViewInit(){
		this.nuevo=Boolean(localStorage.getItem("nuevo"));
		this.nameElementRef1.nativeElement.focus();
	}
	focusNext2(){
		if(this.pinfieldcode1.length == 1){
			this.nameElementRef2.nativeElement.focus();
		}
	}
	focusNext3(){
		if(this.pinfieldcode2.length == 1){
		this.nameElementRef3.nativeElement.focus();
		}
	}
	focusNext4(){
		if(this.pinfieldcode3.length == 1){
		this.nameElementRef4.nativeElement.focus();
		}
	}
	focusNext5(){
		if(this.pinfieldcode4.length == 1){
		this.nameElementRef5.nativeElement.focus();
		}
	}
	focusNext6(){
		if(this.pinfieldcode5.length == 1){
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
			this.router.navigate(['cuentas', 'inicio']);
		}
		console.log(cadena);
	}
	public generarPin() {
		let pines = document.getElementsByClassName('input-pincode');
		let cadena: string = '';
		for (let i = 0; i < pines.length; ++i) {
			cadena += (<HTMLInputElement>pines[i]).value;
		}

		PinService.pin=cadena;
		this.router.navigate(['cuentas', 'inicio']);
	}
}
