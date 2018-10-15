import { Component,AfterViewInit,OnInit, OnChanges } from '@angular/core';
import { CCuenta } from '../../Clases/Cuenta/CCuenta';
import { CRotorPosicion } from '../../Clases/Enigma/CRotorPosicion';
import { CEnigma } from '../../Clases/Enigma/CEnigma';
import { CuentasService } from '../../Servicios/cuentas.service';
import { Observable } from "rxjs";
import {Cuenta} from "../../Servicios/model"

@Component({
	selector: 'app-cuentas',
	templateUrl: './cuentas.component.html',
	styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements AfterViewInit, OnInit,OnChanges {
	public showPinModal: boolean = false;
	cuentas: Observable<Cuenta[]>;
	//private cuentast: Array<CCuenta>;
	constructor(private cuentasServicio: CuentasService) {}
	ngAfterViewInit(){
		this.cuentas = this.cuentasServicio.getCuentas();
	}
	ngOnInit()
	{
		this.cuentas = this.cuentasServicio.getCuentas();
		let asd: CRotorPosicion = new CRotorPosicion();
		let rotorI: number = asd.transformar("123456");
		let rotorII: number = asd.transformar("123456");
		let rotorIII: number = asd.transformar("123456");
		let enigma: CEnigma = CEnigma.getInstancia(rotorI, rotorII, rotorIII);
	}
	ngOnChanges()
	{
		this.cuentas = this.cuentasServicio.getCuentas();
	}

}
