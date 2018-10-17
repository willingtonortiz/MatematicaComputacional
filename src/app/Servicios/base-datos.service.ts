import { Injectable } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
	AngularFirestoreDocument
} from 'angularfire2/firestore';

import { CCuenta } from '../Clases/Cuenta/CCuenta';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})

export class BaseDatosService {
	cuentasColeccion: AngularFirestoreCollection<CCuenta>;
	cuentas: Observable<CCuenta[]>;
	cuentasDoc: AngularFirestoreDocument<CCuenta>;

	constructor(public afs: AngularFirestore) {
		this.cuentasColeccion = this.afs.collection('cuentas');

		// this.cuentas = this.cuentasColeccion.snapshotChanges().pipe(
		// 	map(cambios => {
		// 		return cambios.map(a => {
		// 			const data = a.payload.doc.data() as CCuenta;
		// 			data.id = a.payload.doc.id;
		// 			return data;
		// 		})
		// 	})
		// );
	}

	public GetCuentas() {
		return this.cuentasColeccion.snapshotChanges();
	}

	public AddCuenta(cuenta: CCuenta) {
		this.cuentasColeccion.add(cuenta);
	}

	public DeleteCuenta(cuenta: CCuenta) {
		this.cuentasDoc = this.afs.doc(`prueba/${cuenta.id}`);
		this.cuentasDoc.delete();
	}

	public UpdateCuenta(cuenta: CCuenta) {
		this.cuentasDoc = this.afs.doc(`prueba/${cuenta.id}`)
		this.cuentasDoc.update(cuenta);
	}
}
