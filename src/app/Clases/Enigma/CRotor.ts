export class CRotor {

    private alfabeto: string[];
    public diccionario: string[];
    private claves: string[];
    public indice: number;
    public indiceRotacion: number;

    constructor(alfabeto: string[], claves: string[], indiceRotacion: number, cantidadRotaciones: number) {
        // Referencia al alfabeto general
        this.alfabeto = alfabeto;

        // Se crea una copia del alfabeto, el cual se usará para rotaciones
        this.diccionario = new Array<string>();
        for (let i = 0; i < this.alfabeto.length; ++i) {
            this.diccionario.push(alfabeto[i]);
        }

        // Se asignan las clases
        this.claves = claves;

        // Rotaciones
        this.indice = 0;
        this.indiceRotacion = indiceRotacion;
        for (let i = 0; i < cantidadRotaciones; ++i) {
            this.rotar();
        }
    }

    // Rota el diccionario del rotor
    public rotar(): boolean {
        // Obtiene la primera letra del diccionario
        let ultimo: string = this.diccionario.shift();

        // Obtiene la letra al final del diccionario
        this.diccionario.push(ultimo);

        if (++this.indice === this.diccionario.length) this.indice = 0;

        if (this.indice === this.indiceRotacion) return true;
        return false;
    }

    // Obtiene la posicion del aumento en el diccionario del rotor
    public posicionCifrada(posicion: number): number {
        // Se obtiene el aumento para el diccionario del rotor
        //posicion = posicion % this.diccionario.length;

        // Obtiene la letra que tiene la 'posicion' en el diccionario del rotor
        let letra: string = this.diccionario[posicion];

        let clave: string = this.cifrarLetra(letra);

        // Se busca la 'posicion' de la clave en el diccionario
        for (let i = 0; i < this.diccionario.length; ++i) {
            if (this.diccionario[i] === clave) return i;
        }
    }

    public posicionDescifrada(posicion: number): number {

        let letra: string = this.diccionario[posicion];

        let clave: string = this.descifrarLetra(letra);

        // Se busca la 'posicion' de la clave en el diccionario
        for (let i = 0; i < this.diccionario.length; ++i) {
            if (clave === this.diccionario[i]) return i;
        }
    }

    // Trasforma la letra a partir del arreglo de claves
    public cifrarLetra(letra: string): string {
        for (let i = 0; i < this.alfabeto.length; ++i) {
            if (letra === this.alfabeto[i])
                return this.claves[i];
        }
    }

    public descifrarLetra(letra: string): string {
        for (let i = 0; i < this.claves.length; ++i) {
            if (letra === this.claves[i])
                return this.alfabeto[i];
        }
    }

}