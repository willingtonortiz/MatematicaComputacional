import { CPar } from "./CPar";

export class CReflector {
    private claves: CPar[];

    constructor(claves: CPar[]) {
        this.claves = claves;
    }

    // Devuelve la posicion en el alfabeto de la letra transformada
    public transformar(posicion: number): number {
        return this.claves[posicion].clave.index;;
    }

}