export class CPar {
    public letra: string;
    public index: number;

    public clave: CPar;
    public origen: CPar;

    constructor(letra: string, index: number) {
        this.letra = letra;
        this.index = index;
        this.clave = this.origen = null;
    }
}