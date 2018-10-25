/* MODULOS */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

/* ENVIROMENT */
import { environment } from "../environments/environment";

/* COMPONENTES */
import { AppComponent } from './app.component';

/* SERVICIOS */
import { AuthenticationService } from './Servicios/authentication.service';
import { CuentasService } from './Servicios/cuentas.service';
import { PersonaService } from './Servicios/persona.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule,
		AngularFireDatabaseModule,
		BrowserModule,
		AppRoutingModule,
	],
	providers: [
		AuthenticationService,
		CuentasService,
		PersonaService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
