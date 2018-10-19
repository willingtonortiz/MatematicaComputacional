import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  nuevo:boolean;
  uid:string="";
  constructor() { }
}
