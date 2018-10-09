import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  nuevo:boolean=false;
  uid:string="";
  constructor() { }
}
