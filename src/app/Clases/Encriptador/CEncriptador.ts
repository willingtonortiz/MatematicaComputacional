import { AES } from '../AES/AES'
export class CEncriptador {
    constructor() {

    }
    private encriptar(texto: string, contrasenia: string) {
        //el nuevo caracter que agregue es ♥ 
        let encripadorAES = new AES(texto, contrasenia, true);
        texto=encripadorAES.textoModificado;
        //seguir encriptando
        return texto;
    }
    private desencriptar(texto: string, contrasenia: string){
        //desencriptación del texto por los otros algoritmos
        let desencripadorAES = new AES(texto, contrasenia, false);
        texto=desencripadorAES.textoModificado;
        return texto;
    }
}