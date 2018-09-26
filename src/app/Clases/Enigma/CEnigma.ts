import { CAlfabeto } from "./CAlfabeto";
import { CRotor } from "./CRotor";
import { CReflector } from "./CReflector";

export class CEnigma {

    private static instancia: CEnigma = null;

    private alfabetos: CAlfabeto;
    private alfabeto: string[];
    private rotorI: CRotor;
    private rotorII: CRotor;
    private rotorIII: CRotor;
    private reflector: CReflector;

    public static getInstancia(rotI: number, rotII: number, rotIII: number): CEnigma {
        if (this.instancia === null) {
            CEnigma.instancia = new CEnigma(rotIII, rotII, rotI);
        }
        return CEnigma.instancia;
    }

    constructor(rotacionesIII: number, rotacionesII: number, rotacionesI: number) {
        this.alfabetos = CAlfabeto.getInstancia();
        this.alfabeto = this.alfabetos.alfabeto;

        this.rotorI = new CRotor(
            this.alfabetos.alphaRotorI,
            17,
            rotacionesI
        );

        this.rotorII = new CRotor(
            this.alfabetos.alphaRotorII,
            5,
            rotacionesII
        );

        this.rotorIII = new CRotor(
            this.alfabetos.alphaRotorIII,
            22,
            rotacionesIII
        );

        this.reflector = new CReflector(
            this.alfabetos.alphaReflector
        );
    }

    // Calcula el aumento de la letra de entrada a partir del alfabeto
    public calcularAumento(letra: string): number {
        for (let i = 0; i < this.alfabeto.length; ++i) {
            if (letra === this.alfabeto[i]) return i;
        }
    }

    public calcularLetra(aumento: number): string {
        return this.alfabeto[aumento];
    }

    // Devuelve la letra cifrada
    private cifrarLetra(letra: string): string {
        // Clave es el valor del aumento
        let clave: any = this.calcularAumento(letra);

        // Proceso de rotarcion
        if (this.rotorIII.rotar()) {
            if (this.rotorII.rotar()) {
                this.rotorIII.rotar();
            }
        }
        else {
            if (this.rotorII.sigueRotacion()) {
                this.rotorII.rotar();
                this.rotorI.rotar();
            }
        }

        clave = this.rotorIII.posClave(clave);
        clave = this.rotorII.posClave(clave);
        clave = this.rotorI.posClave(clave);
        clave = this.reflector.transformar(clave);
        clave = this.rotorI.posLetra(clave);
        clave = this.rotorII.posLetra(clave);
        clave = this.rotorIII.posLetra(clave);
        clave = this.calcularLetra(clave);

        return clave;
    }

    // Devuelve el texto cifrado
    public cifrarTexto(texto: string): string {
        let cadena: string = '';
        for (let i = 0; i < texto.length; ++i) {
            cadena += this.cifrarLetra(texto[i]);
        }
        this.rotorI.reiniciar();
        this.rotorII.reiniciar();
        this.rotorIII.reiniciar();
        return cadena;
    }
}