import { Cuenta } from "./Cuenta";

export class ArrCuentas {
    private cuentas: Array<Cuenta>;
    private static instancia: ArrCuentas = null;

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
}