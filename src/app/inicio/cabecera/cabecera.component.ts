import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Servicios/authentication.service'
import {PersonaService} from '../../Servicios/persona.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService,
    private router: Router,
    private personaService:PersonaService,

  ) { }

  ngOnInit() {
  }
  loginWithGoole(): void {
    console.log("Logueo");
    this.authenticationService
      .signInWithGoogle()
      .then(res => {
        console.log("Logueo Correcto");
        this.personaService.uid=res.user.uid;
        this.personaService.nuevo=res.additionalUserInfo.isNewUser;
        if( this.personaService.nuevo)
        {
          this.router.navigate(['cuentas', 'pin']);
        }
        else
        this.router.navigate(['cuentas', 'pin']);
      })
      .catch(error => {
        // var errorCode = error.code;
        console.log(error.message);
      });
  }

}
