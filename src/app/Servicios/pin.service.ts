import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class PinService {
	public static pin: string = "";
	public static actual: string = "";
	public static intento: string = "";
	public static tipo: string = "";

	constructor() { }
}
