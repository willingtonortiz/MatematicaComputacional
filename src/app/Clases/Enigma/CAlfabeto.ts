import { CPar } from "./CPar";

export class CAlfabeto {
    // Singleton
    private static instancia: CAlfabeto = null;

    public alphaRotorI: CPar[] = null;
    public alphaRotorII: CPar[] = null;
    public alphaRotorIII: CPar[] = null;
    public alphaReflector: CPar[] = null;

    public alfabeto = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '@', '#', '*', '.', '+', '×', '÷', '=', '%', '/', '€', '£', '$', '!', ':', ';',
        '&', '_', '(', ')', '-', '\'', '"', ',', '?', '￦', '¥', '°', '¿', '¡', '^', '[', ']', '<', '>', '~', '`', '§', 'μ', '¬', 'Г', '´', '·',
        '{', '}', '©', '|', '¤', 'Ω', 'θ', 'ฯ', 'ê', 'ë', 'é', 'è', 'û', 'ù', 'ü', 'ú', 'î', 'ì', 'ï', 'í', 'œ', 'ø', 'õ', 'ô', 'ö', 'ò', 'ó',
        'ã', 'å', 'æ', 'à', 'ä', 'â', 'á', 'ß', 'ç', 'Ê', 'Ë', 'É', 'È', 'Û', 'Ù', 'Ü', 'Ú', 'Î', 'Ì', 'Ï', 'Í', 'Œ', 'Ø', 'Õ', 'Ô', 'Ö', 'Ò',
        'Ó', 'Ã', 'Å', 'Æ', 'À', 'Ä', 'Â', 'Á', 'Ç', '\\','♥'
    ];

    private rotorI = [
        'H', '|', 'j', 'e', '©', '<', 'Y', 't', 'Ü', 'Á', 'K', '!', 'Ï', '´', '>', '~', 'Å', ']', 'ê', 'E', '?', 'x', 'u', '7', 'G', 'ú', '2',
        'É', '^', '€', ';', 'ï', '3', 'Ó', '£', 'Q', 'o', 'n', '#', 'Ñ', 'B', '5', 'q', 's', 'W', 'ฯ', 'k', 'Ä', 'è', '4', 'θ', 'ñ', 'Û', 'â',
        'Ô', 'ò', 'w', '-', '×', 'Ò', 'v', 'ß', 'Ë', 'ö', 'õ', 'À', 'Ê', 'Ø', 'Œ', '¡', ':', '6', 'r', 'Ã', '0', 'Ω', '·', 'R', 'X', 'ø', 'î',
        '9', 'f', 'μ', '{', 'æ', '¿', 'S', '(', '\'', 'T', 'b', '÷', 'ç', 'å', 'C', 'Г', ' ', '=', 'p', '¥', 'á', 'U', 'F', 'y', 'ì', 'û', ')',
        'Ù', 'Ú', '*', '¬', '§', 'Ç', 'œ', 'ë', 'ã', 'I', 'Ö', 'L', 'M', '￦', '1', '`', 'à', '+', 'O', 'Z', 'í', 'd', 'é', 'Õ', 'A', 'Í', '.',
        'Î', 'ù', 'ó', 'h', 'Æ', '}', 'V', 'Ì', 'a', '8', '[', '&', '%', 'm', 'J', 'c', '/', 'Â', ',', 'ü', 'P', 'i', 'l', '$', 'g', 'ô', 'È',
        '¤', '_', 'N', '"', 'ä', 'D', '@', 'z', '\\', '°','♥'
    ];

    private rotorII = [
        'Ã', 'Á', 'O', 'V', 'Ï', '÷', 'u', 'j', 'Ê', 's', 'W', 'N', '`', '©', '9', 'q', 'w', 'i', 'ç', 'ò', 'Ò', 'C', 'Õ', 'f', 'î', 'P', 'Ó',
        '[', 'Ë', '¬', 'E', '^', '7', 'd', 'û', 'È', 'X', 'õ', '&', ')', '#', '§', '>', 'p', '´', 'k', 'h', '?', 'Û', 'Î', ']', 'o', '￦', 'æ',
        'Â', 'F', 'n', 'a', 'K', 'œ', 'S', 'Ñ', 'Ä', 'Y', 'x', 'ì', '<', 'b', 'R', '4', 'Ü', '!', '+', 'B', 'ñ', '×', 'g', '°', 'í', '0', 'Ô',
        'e', 'y', ':', 'â', 'ï', '·', '@', '8', '\\', '2', 'Ö', 'Ú', 'ó', 'Æ', '1', '(', 'U', 'ß', 'J', 'I', '/', '¡', 'Z', '.', 'á', '6', ';',
        '€', 'D', 'ฯ', 'ä', '¤', ' ', 'Å', 'r', 'M', '=', 'ü', 'å', 'z', '5', 'ë', 'Œ', 'ã', 'Ω', 'ø', 'ô', 'è', 'Ì', '¿', 'Ç', '$', 'É', 'H',
        'é', '%', 'm', '_', 'L', '}', ',', '{', 'Ø', 'ú', 'v', '~', '|', '*', '-', 'Í', 'c', 'ù', '"', 'θ', 'à', 'A', '\'', 'Q', 'μ', 'T', 'ê',
        '£', 'Г', 'G', '3', 'Ù', 't', '¥', 'ö', 'l', 'À','♥'
    ];

    private rotorIII = [
        'D', '&', '´', 'ø', 'X', 'ä', 'c', 'é', ')', 'í', '=', 'Æ', 'ß', 'w', '#', 'o', 'Â', '9', '\'', 'Ë', 'K', ':', '^', '>', 'p', 'û', 'B',
        'a', '_', 'ê', 'h', 'á', 'Y', '"', 'G', 'Û', 'Ã', 'Í', 'Ç', 'É', '€', '-', '÷', 'œ', 'Ì', '¿', '[', 'î', '@', ' ', 'È', 'ò', 'ã', 'L',
        'Ù', 'Ä', 'M', 'v', 'V', 'z', '8', 'E', 'Ø', 'à', 'u', 'n', 'O', '/', 'x', 'Ê', 'q', 'ù', 'Ï', 'k', 'ö', 'ì', 'Q', '%', '*', 'æ', ',',
        'õ', 'Ü', 'ó', 'S', 'μ', '°', '5', 'r', 'θ', 'è', 'Î', 'i', '6', 'g', 'A', 'ú', 'Ñ', '4', ';', '¬', 'U', '~', 'd', '¥', 'm', 'H', '$',
        'I', '2', 'Ú', 'N', '0', 'W', 'ñ', 'â', '£', 'F', 'ï', 'Ö', 'f', 'À', 'Œ', 'l', 'ฯ', ']', '×', '{', '§', '·', 'J', '￦', '3', 'j', 'ü',
        '`', 'Z', 'R', 'Á', 'Г', 'Ô', 'e', '©', '}', 't', '|', 'Õ', '7', '¤', 'P', 'Å', 'å', '?', '!', 's', 'T', '(', 'Ó', '.', '+', 'C', 'Ò',
        'Ω', 'ë', 'y', '<', 'ç', 'b', '¡', 'ô', '1', '\\','♥'
    ];

    private reflector = [
        '♥','\\', 'Ç', 'Á', 'Â', 'Ä', 'À', 'Æ', 'Å', 'Ã', 'Ó', 'Ò', 'Ö', 'Ô', 'Õ', 'Ø', 'Œ', 'Í', 'Ï', 'Ì', 'Î', 'Ú', 'Ü', 'Ù', 'Û', 'È', 'É', 'Ë',
        'Ê', 'ç', 'ß', 'á', 'â', 'ä', 'à', 'æ', 'å', 'ã', 'ó', 'ò', 'ö', 'ô', 'õ', 'ø', 'œ', 'í', 'ï', 'ì', 'î', 'ú', 'ü', 'ù', 'û', 'è', 'é',
        'ë', 'ê', 'ฯ', 'θ', 'Ω', '¤', '|', '©', '}', '{', '·', '´', 'Г', '¬', 'μ', '§', '`', '~', '>', '<', ']', '[', '^', '¡', '¿', '°', '¥',
        '￦', '?', ',', '"', '\'', '-', ')', '(', '_', '&', ';', ':', '!', '$', '£', '€', '/', '%', '=', '÷', '×', '+', '.', '*', '#', '@', ' ',
        '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'ñ', 'n', 'm', 'l', 'k',
        'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'Ñ', 'N', 'M', 'L', 'K',
        'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A',
    ];

    private constructor() {
        this.alphaRotorI = [];
        this.alphaRotorII = [];
        this.alphaRotorIII = [];
        this.alphaReflector = [];

        // Creacion de datos
        for (let i = 0; i < this.alfabeto.length; ++i) {
            let rI: CPar = new CPar(this.alfabeto[i], i);
            this.alphaRotorI.push(rI);

            let rII: CPar = new CPar(this.alfabeto[i], i);
            this.alphaRotorII.push(rII);

            let rIII: CPar = new CPar(this.alfabeto[i], i);
            this.alphaRotorIII.push(rIII);

            let reflec: CPar = new CPar(this.alfabeto[i], i);
            this.alphaReflector.push(reflec);
        }

        // Creacion enlaces
        for (let i = 0; i < this.rotorI.length; ++i) {
            for (let j = 0; j < this.alphaRotorI.length; ++j) {
                if (this.rotorI[i] === this.alphaRotorI[j].letra) {
                    this.alphaRotorI[i].clave = this.alphaRotorI[j];
                    this.alphaRotorI[j].origen = this.alphaRotorI[i];
                    break;
                }
            }
        }
        for (let i = 0; i < this.rotorII.length; ++i) {
            for (let j = 0; j < this.alphaRotorII.length; ++j) {
                if (this.rotorII[i] === this.alphaRotorII[j].letra) {
                    this.alphaRotorII[i].clave = this.alphaRotorII[j];
                    this.alphaRotorII[j].origen = this.alphaRotorII[i];
                    break;
                }
            }
        }
        for (let i = 0; i < this.rotorIII.length; ++i) {
            for (let j = 0; j < this.alphaRotorIII.length; ++j) {
                if (this.rotorIII[i] === this.alphaRotorIII[j].letra) {
                    this.alphaRotorIII[i].clave = this.alphaRotorIII[j];
                    this.alphaRotorIII[j].origen = this.alphaRotorIII[i];
                    break;
                }
            }
        }
        for (let i = 0; i < this.reflector.length; ++i) {
            for (let j = 0; j < this.alphaReflector.length; ++j) {
                if (this.reflector[i] === this.alphaReflector[j].letra) {
                    this.alphaReflector[i].clave = this.alphaReflector[j];
                    this.alphaReflector[j].origen = this.alphaReflector[i];
                    break;
                }
            }
        }
    }

    public static getInstancia(): CAlfabeto {
        if (CAlfabeto.instancia === null) {
            CAlfabeto.instancia = new CAlfabeto();
        }
        return CAlfabeto.instancia;
    }

    public generarAlfabeto(): Array<string> {
        let cadenaFinal = new Array<string>();
        let tamanio = this.alfabeto.length;

        for (let i = 0; i < tamanio; ++i) {
            // Genera un indice para ser retirado del arreglo
            let indice: number = Math.round(Math.random() * (this.alfabeto.length - 1));

            // Asigna el elemento seleccionado a la nueva cadena
            cadenaFinal = cadenaFinal.concat(this.alfabeto.splice(indice, 1));
        }
        return cadenaFinal;
    }
}