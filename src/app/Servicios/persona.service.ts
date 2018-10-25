import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class PersonaService {
	public static nuevo: boolean = false;
	public static uid: string = '';

	constructor() { }
}
