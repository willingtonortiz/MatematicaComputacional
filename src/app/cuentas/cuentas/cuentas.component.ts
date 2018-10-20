import { Component, AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { CRotorPosicion } from '../../Clases/Enigma/CRotorPosicion';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CuentasService } from '../../Servicios/cuentas.service';
import { Observable } from "rxjs";
import { Cuenta } from "../../Servicios/model"
import { Router } from "@angular/router";
@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss'],
	providers: [CuentasService]
})

export class CuentasComponent implements OnInit {
	public showPinModal: boolean = false;
	cuentas: Array<Cuenta> = null;

	//private cuentast: Array<CCuenta>;
	constructor(private cuentasServicio: CuentasService, private router: Router) {
		console.log("Cuentas");
		this.cuentasServicio.getCuentas().subscribe((item) => {
			this.cuentas = new Array<Cuenta>();
			item.forEach((data: any) => {
				let temp = data.payload.doc.data() as Cuenta;
				console.log(temp.id = data.payload.doc.id);
				this.cuentas.push(temp);
			})
		});
		let asd: CRotorPosicion = new CRotorPosicion();
		let rotorI: number = asd.transformar("123456");
		let rotorII: number = asd.transformar("123456");
		let rotorIII: number = asd.transformar("123456");
		let enigma: CEnigma = CEnigma.getInstancia(rotorI, rotorII, rotorIII);

	}
	// ngAfterViewInit()
	// {
	// 	console.log("Cuentas"); 
	// 	this.cuentasServicio.getCuentas().subscribe((item) => {
	// 		this.cuentas = new Array<Cuenta>();
	// 		item.forEach((data: any) => {
	// 			let temp = data.payload.doc.data() as Cuenta;
	// 			temp.id = data.payload.doc.id;
	// 			this.cuentas.push(temp);
	// 		})
	// 	});
	// }
	ngOnInit(): void {
		console.log("Cuentas");
		this.cuentasServicio.getCuentas().subscribe((item) => {
			this.cuentas = new Array<Cuenta>();
			item.forEach((data: any) => {
				let temp = data.payload.doc.data() as Cuenta;
				temp.id = data.payload.doc.id;
				this.cuentas.push(temp);
			})
		});
	}
}
