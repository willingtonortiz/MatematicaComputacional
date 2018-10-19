/* MODULOS */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";


/* COMPONENTES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentasService } from './Servicios/cuentas.service';
import {AuthenticationService}  from './Servicios/authentication.service';
import {PersonaService} from './Servicios/persona.service'
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
  providers: [AuthenticationService,CuentasService,PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
