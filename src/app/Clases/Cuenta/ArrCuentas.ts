import { Cuenta } from "./Cuenta";
import { CEnigma } from "../Enigma/CEnigma";

import { CEncriptador } from "../Encriptador/CEncriptador"
import { PinService } from "../../Servicios/pin.service"

export class ArrCuentas {
    private cuentas: Array<Cuenta>;
    private static instancia: ArrCuentas = null;
    private enigma: CEnigma;
    private encriptador: CEncriptador;

    private actual: Cuenta;

    private constructor() {
        this.cuentas = new Array<Cuenta>();
        this.encriptador = new CEncriptador();

    }

    public static getInstancia(): ArrCuentas {
        if (this.instancia === null) {
            this.instancia = new ArrCuentas();
        }
        return this.instancia;
    }

    public getCuentas(): Array<Cuenta> {
        return this.cuentas;
    }

    public setCuentas(cuentas: Array<Cuenta>): void {
        this.cuentas = cuentas;
    }

    public getActual(): Cuenta {
        return this.actual;
    }

    public setActual(id: string): void {
        let entro: boolean = false;
        this.cuentas.forEach((item) => {
            if (item.id === id) {
                this.actual = item;
                entro = true;
                return;
            }
        });
        if (!entro)
            this.actual = undefined;
    }

    public desencriptarActual(): void {
        this.actual.usuario = this.encriptador.desencriptar(this.actual.usuario, PinService.pin);
        this.actual.contrasenia = this.encriptador.desencriptar(this.actual.contrasenia, PinService.pin);
    }
    public encriptarActual(): void {
        this.actual.usuario = this.encriptador.encriptar(this.actual.usuario, PinService.pin);
        this.actual.contrasenia = this.encriptador.encriptar(this.actual.contrasenia, PinService.pin);
    }
}