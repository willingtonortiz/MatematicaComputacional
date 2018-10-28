import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import {
	AngularFirestore,
	AngularFirestoreCollection
} from "angularfire2/firestore";
import { PersonaService } from './persona.service'
import { Observable } from "rxjs";
// import { Cuenta } from "./model";
import { Cuenta } from '../Clases/Cuenta/Cuenta';

@Injectable({
	providedIn: 'root'
})

export class CuentasService {
	private cuentasCollection: AngularFirestoreCollection<Cuenta>;
	private cuentas: Observable<Cuenta[]>
	private cuentasdoc: AngularFirestoreDocument<Cuenta>
	private route: string

	public constructor(
		private angularFireStore: AngularFirestore
	) {
		// localStorage.getItem("uid");
		// this.cuentasCollection = this.angularFireStore.collection(localStorage.getItem("uid"), x => x.orderBy('usuario', 'asc'));
		this.cuentasCollection = this.angularFireStore.collection(PersonaService.uid, x => x.orderBy('usuario', 'asc'));
	}

	public addCuenta(cuenta: any) {
		this.cuentasCollection.add(cuenta);
	}

	public getCuentas() {
		return this.cuentasCollection.snapshotChanges();
	}

	public updateCuenta(cuenta: Cuenta) {
		this.cuentasdoc = this.angularFireStore.doc(`${PersonaService.uid}/${cuenta.id}`);
		this.cuentasdoc.update(cuenta);
	}

	public deleteCuenta(id) {
		// this.cuentasdoc = this.angularFireStore.doc(`${localStorage.getItem("uid")}/${id}`);
		this.cuentasdoc = this.angularFireStore.doc(`${PersonaService.uid}/${id}`);
		this.cuentasdoc.delete();
	}
}
