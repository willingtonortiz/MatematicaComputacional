import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import {
	AngularFirestore,
	AngularFirestoreCollection
} from "angularfire2/firestore";
import { PersonaService } from './persona.service'
import { Observable } from "rxjs";
import { Cuenta } from "./model"
// import { map } from 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})

export class CuentasService {
	cuentasCollection: AngularFirestoreCollection<Cuenta>;
	cuentas: Observable<Cuenta[]>
	cuentasdoc: AngularFirestoreDocument<Cuenta>
	route: string

	constructor(
		private angularFireStore: AngularFirestore
	) {
		// localStorage.getItem("uid");
		// this.cuentasCollection = this.angularFireStore.collection(localStorage.getItem("uid"), x => x.orderBy('usuario', 'asc'));
		this.cuentasCollection = this.angularFireStore.collection(PersonaService.uid, x => x.orderBy('usuario', 'asc'));
	}

	addCuenta(cuenta: Cuenta) {
		this.cuentasCollection.add(cuenta);
	}

	getCuentas() {
		return this.cuentasCollection.snapshotChanges();
	}

	deleteCuenta(id) {
		// this.cuentasdoc = this.angularFireStore.doc(`${localStorage.getItem("uid")}/${id}`);
		this.cuentasdoc = this.angularFireStore.doc(`${PersonaService.uid}/${id}`);
		this.cuentasdoc.delete();
	}
}
