import { Cuenta } from "./Cuenta";
import { CEnigma } from "../Enigma/CEnigma";

export class ArrCuentas {
    private cuentas: Array<Cuenta>;
    private static instancia: ArrCuentas = null;
    private enigma: CEnigma;

    private actual: Cuenta;

    private constructor() {
        this.cuentas = new Array<Cuenta>();
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
        this.cuentas.forEach((item) => {
            if (item.id === id) {
                this.actual = item;
            }
        });
    }

    public desencriptarActual(): void {
        this.enigma = CEnigma.getInstancia(0, 0, 0);
        this.actual.usuario = this.enigma.cifrarTexto(this.actual.usuario);
        this.actual.contrasenia = this.enigma.cifrarTexto(this.actual.contrasenia);
    }
}