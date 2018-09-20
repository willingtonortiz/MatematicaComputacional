export class CReflector {
    private alfabeto: string[];
    private claves: string[];

    constructor(alfabeto: string[], claves: string[]) {
        this.alfabeto = alfabeto;
        this.claves = claves;
    }

    // Devuelve la posicion en el alfabeto de la letra transformada
    public transformar(posicion: number): number {
        let clave = '';
        clave = this.claves[posicion];

        for (let i = 0; i < this.alfabeto.length; ++i) {
            if (clave === this.alfabeto[i]) return i;
        }
    }

}