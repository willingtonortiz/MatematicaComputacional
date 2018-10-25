import { Component, NgZone } from '@angular/core';
import { AuthenticationService } from '../../Servicios/authentication.service';
import { PersonaService } from '../../Servicios/persona.service';
import { Router } from "@angular/router";

@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.scss'],
})

export class CabeceraComponent {
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
		private zone: NgZone
	) { }

	public loginWithGoogle(): void {
		this.authenticationService
			.signInWithGoogle()
			.then(res => {
				PersonaService.uid = res.user.uid;
				PersonaService.nuevo = true;
				this.zone.run(() => { this.router.navigate(["/cuentas", "pin"]); });
			})
			.catch(error => {
				console.log(error.message);
			});
	}
}
