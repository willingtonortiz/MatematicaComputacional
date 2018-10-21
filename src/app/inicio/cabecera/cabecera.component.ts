import { Component } from '@angular/core';
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
		private router: Router
	) { }

	public loginWithGoogle(): void {
		this.authenticationService
			.signInWithGoogle()
			.then(res => {
				PersonaService.uid = res.user.uid;
				// this.personaService.nuevo = res.additionalUserInfo.isNewUser;
				PersonaService.nuevo = true;
				// localStorage.setItem('uid', this.personaService.uid);
				// localStorage.setItem('nuevo', String(this.personaService.nuevo));

				// if (this.personaService.nuevo) {
				// this.router.navigateByUrl("cuentas/pin");
				this.router.navigate(["/cuentas", "pin"]);
				// }
				// else {
				// this.router.navigate(['cuentas']);
				// }
			})
			.catch(error => {
				console.log(error.message);
			});
	}
}
