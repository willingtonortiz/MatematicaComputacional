import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import {
	AngularFirestore,
	AngularFirestoreCollection
  } from "angularfire2/firestore";
import {PersonaService} from './persona.service'
import { Observable } from "rxjs";
import {Cuenta} from "./model"
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})

export class CuentasService {
 cuentasCollection: AngularFirestoreCollection<Cuenta>;
 cuentas:Observable<Cuenta[]>
 cuentasdoc:AngularFirestoreDocument<Cuenta>
 route:string
	constructor(private angularFireStore: AngularFirestore,private personaService:PersonaService) {
		this.cuentasCollection = this.angularFireStore.collection(localStorage.getItem("uid"), x => x.orderBy('usuario', 'asc'));
		this.cuentas = this.cuentasCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Cuenta;
            data.id = this.personaService.uid;
            return data;
          });

      });
	 }
	 addCuenta(cuenta:Cuenta) {
		this.cuentasCollection.add(cuenta);
	  }

	  getCuentas(): Observable<Cuenta[]> {
		return  this.cuentasCollection.valueChanges();
		}
		deleteUser(Cuenta) {
			this.cuentasdoc = this.angularFireStore.doc(`Cuentas/${Cuenta.id}`);
			this.cuentasdoc .delete();
		}
}
